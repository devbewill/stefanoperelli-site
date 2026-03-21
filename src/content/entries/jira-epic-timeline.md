---
type: "project"
title: "Jira can't show you the entire picture"
description: "When Jira can't show you the full picture, build it yourself"
pubDate: "2026-03-21"
role: "Builder"
tools: ["timeline", "jira", "oauth2", "jql"]
year: "2026"
featured: true
---

I work across multiple Jira projects. Each has its own board, its own roadmap, its own timeline view. And I tag the most critical epics with a `P0` label, the stuff that genuinely matters and needs to be tracked week by week. The problem is there's no native way in Jira to see all P0 epics from every project side by side on a single horizontal timeline. You can filter by label inside a single project, sure. But the moment you want CEF epics and PILLARS epics and HCD epics all visible at once, Jira just doesn't have that. Not without a paid plugin or a third-party add-on.

So I built it myself. On a weekend, for fun, with Claude Code doing most of the heavy lifting.

The result is a Next.js app I called **jira-cross**: a scrollable horizontal Gantt-style timeline that pulls all P0 epics from every accessible Jira project and renders them in swimlane rows, one per project. It's open source at [github.com/devbewill/jira-cross](https://github.com/devbewill/jira-cross).

---

### Getting data out of Jira

The first thing I had to figure out was the API. Jira uses REST API v3, and the main endpoint for querying issues is `POST /rest/api/3/search/jql`. Authentication is Basic Auth with a base64-encoded `email:api_token` string. You generate the token at [id.atlassian.com](https://id.atlassian.com) under Security > API Tokens. Read-only access is enough, no write permissions needed.

The JQL to get all P0 epics across all projects is straightforward:

```
issuetype = Epic AND labels = P0 ORDER BY created DESC
```

For each epic, I request these fields: `summary`, `status`, `assignee`, `duedate`, `customfield_10015` (start date), `customfield_10016` (story points), `parent`, `project`. The custom field IDs for start date and story points are instance-specific, so if dates aren't showing up you can discover your own by calling `GET /rest/api/3/field`.

One thing worth knowing: the old `/rest/api/3/search` endpoint was deprecated and removed by Atlassian (it returns 410 Gone now). The only supported endpoint is `/rest/api/3/search/jql`, which uses cursor-based pagination via `nextPageToken`, not `startAt`. This tripped me up. I had `startAt` in the query params and it was silently ignored, meaning every request always returned the first 50 results. I only noticed because adding a large epic (34 stories) to the timeline made all story counts wrong for every other epic. The fix was simple once I understood it:

```typescript
let nextPageToken: string | undefined = undefined;
while (hasMore && allIssues.length < MAX_RESULTS) {
  const payload = {
    jql,
    maxResults: 50,
    ...(nextPageToken && { nextPageToken }),
  };
  const response = await POST("/search/jql", payload);
  allIssues.push(...response.issues);
  hasMore = !response.isLast && !!response.nextPageToken;
  nextPageToken = response.nextPageToken;
}
```

For story stats I didn't want to do one API call per epic (N+1 problem). Instead, I batch all epic keys in a single JQL query and aggregate the results in memory:

```
parent in (KEY-1, KEY-2, KEY-3, ...) ORDER BY status
```

I request only `status` and `parent` fields, then group by `issue.fields.parent.key` and bucket by `statusCategory.key`: `"done"`, `"indeterminate"` (in progress), and anything else as todo. One query for all epics, regardless of how many there are.

For releases, I fetch all accessible projects via `GET /rest/api/3/project/search` (paginated, 100 per page, using offset-based `startAt` which still works on the project search endpoint), then fire `GET /rest/api/3/project/{key}/versions` for each project in parallel using `Promise.all`. Archived versions are filtered out, and I keep only releases with dates on or after 2025-01-01.

---

### The timeline coordinate system

The trickiest part wasn't the API, it was the timeline rendering. I wanted four zoom levels: today (day view, tight window around now), weeks, months, quarters. Each scale has a different visible window and a different tick density.

The key insight is that everything is driven by a single number: `pxPerDay`, the number of pixels one calendar day occupies on screen. It's computed dynamically:

```
pxPerDay = viewportWidth / visibleDays
```

where `viewportWidth` is the actual pixel width of the timeline area (measured with a `ResizeObserver` so it reacts to window resizes), and `visibleDays` is the number of days in the visible window for the current scale. With that single number, converting any date to a pixel position becomes:

```
pixelX = differenceInDays(date, scrollOrigin) * pxPerDay
```

The `scrollOrigin` is the leftmost date of the scrollable area, not just the visible window. The scrollable area is wider than the viewport so you can pan. When I change scale or on first mount, I snap the scroll position to "today" so it's always centered in the view. That snap fires in a `requestAnimationFrame` to make sure the DOM has finished measuring:

```typescript
const scrollLeft = getScrollLeftForToday(
  scale,
  viewportWidth,
  scrollOrigin,
  today,
);
requestAnimationFrame(() => {
  scrollContainerRef.current?.scrollTo({ left: scrollLeft });
});
```

I used a `snapKey = \`${scale}-${viewportWidth}\`` guard to make sure the snap only fires once per unique scale+width combination, not on every re-render.

The `today` value itself is stabilized with `useMemo(() => startOfDay(new Date()), [])` to avoid millisecond drift breaking `differenceInDays` across renders.

---

### The epic bar design

Each epic renders as two parts: an info row above (summary in uppercase + colored status dots with counts) and a bar below (just the epic key and due date). The bar's background is divided into N physical div segments, one per user story, colored by status. I avoided CSS gradients entirely and used actual flex children instead:

```tsx
<div className="absolute inset-0 flex gap-[0.5px] bg-black">
  {segments.map((color, i) => (
    <div key={i} style={{ flex: 1, backgroundColor: color }} />
  ))}
</div>
```

The `bg-black` on the container creates a 0.5px black hairline between each segment. The content (key badge, date) sits on top at `z-index: 10`.

When an epic has no stories, it falls back to a solid color based on its status category. When you click an epic, a slide-in panel fetches the individual stories for that epic and lists them with status, assignee, and a mini progress bar.

---

### Caching

Every Jira fetch is cached in memory with a 24h TTL. Clicking "Sync Jira" clears both the epics cache and the releases cache. One thing that bit me in development: Next.js hot module reloading can create multiple instances of a module, meaning the cache object in the refresh route and the epics route ended up being different objects in memory. Clearing one didn't clear the other. The fix is anchoring the cache to `globalThis`:

```typescript
const g = globalThis as typeof globalThis & { __epicsCache?: MemoryCache };
if (!g.__epicsCache) g.__epicsCache = new MemoryCache(TTL_MS);
export const epicsCache = g.__epicsCache;
```

---

### Setting it up

**1. Generate a Jira API token**
Go to [id.atlassian.com](https://id.atlassian.com), Security > API Tokens. Create a token, copy it immediately. Read-only access, no write permissions needed.

**2. Clone the repo**

```bash
git clone https://github.com/devbewill/jira-cross
```

**3. Create `.env.local` in the project root**

```
JIRA_BASE_URL=https://your-company.atlassian.net
JIRA_EMAIL=your-email@company.com
JIRA_API_TOKEN=your-token-here
JIRA_CACHE_TTL=86400
```

**4. Tag your epics**
Add a `P0` label to whichever Jira epics you want on the timeline. That's the only change you need to make in Jira itself.

**5. Run**

```bash
npm install && npm run dev
```

Open `localhost:3000`, click Sync Jira. Done.

**6. If dates aren't showing**
Epic start dates live in a custom field whose ID varies by Jira instance. Call `GET /rest/api/3/field` to find yours and update the field IDs in `src/lib/jira/mapper.ts`.

---

I keep coming back to this question: how many tools do we use every day that are 80% of what we need, but that last 20% requires either paying for a plugin, filing a feature request that might ship in 18 months, or just living without it? At what point does it make more sense to build the missing piece yourself, especially when you have something like Claude Code that removes most of the friction? Is the barrier to custom tooling actually skill anymore, or is it just habit?
