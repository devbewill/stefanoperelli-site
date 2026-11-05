---
type: "project"
name: "HubLab"
title: "One timeline for every critical Jira epic"
description: "A cross-project Gantt view that brings every critical epic from several Jira projects into a single scrollable timeline, with live story progress on each bar."
pubDate: "2026-03-21"
role: "Builder"
tools: ["Next.js", "Jira REST API", "JQL", "Claude Code"]
year: "2026"
featured: true
status: "live"
story:
  problem: "I tag the epics that really matter with a priority label, across several Jira projects. Jira can filter them inside one project, but it can't show all of them side by side on a single timeline without a paid add-on."
  approach: "A small Next.js app that reads the Jira REST API, collects every priority epic in one JQL query, counts story progress in a single batched call and draws one swimlane per project on a zoomable timeline."
  role: "Idea, product design and build, pairing with Claude Code over a weekend."
  status: "Working internal tool. It only needs read-only access to Jira and a label on the epics to track."
  next: "Use it as a test case for a broader question: how much of the 'missing 20%' in the tools I use every day can I now build myself instead of buying a plugin?"
---

## The idea

I work across multiple Jira projects, each with its own board, roadmap and timeline. The critical epics, the ones I follow week by week, carry a priority label. What I wanted was simple: see all of them, from every project, on one horizontal timeline.

Jira doesn't do that. You can filter by label inside a single project, but as soon as you want epics from three or four projects in the same view, the answer is a paid plugin or a third-party add-on. So I built the missing piece myself, on a weekend, with Claude Code doing most of the heavy lifting.

## What it does

**HubLab** is a scrollable, Gantt-style timeline:

- **One row per project**, with every priority epic placed by start and due date.
- **Progress inside the bar**: each epic bar is split into one segment per user story, coloured by status (done, in progress, to do), so you can read progress at a glance.
- **Four zoom levels**: today, weeks, months, quarters, always centred on today.
- **Releases** from every project shown on the same timeline.
- **Click an epic** to open a side panel with its stories, status and assignee.
- **Sync** refreshes the data; everything else is cached for 24 hours.

## How I built it

**Getting data out of Jira.** The app uses the Jira REST API with read-only access. A single JQL query fetches every labelled epic across all projects:

```
issuetype = Epic AND labels = <priority-label> ORDER BY created DESC
```

Two details cost me time. The old search endpoint has been retired, and the current one uses cursor-based pagination (`nextPageToken`) while silently ignoring the old `startAt` parameter. And to avoid one API call per epic, story stats come from a single batched query (`parent in (…)`) grouped in memory by epic and status.

**One number drives the timeline.** Every position on screen comes from `pxPerDay = viewportWidth / visibleDays`. A date becomes a pixel with `differenceInDays(date, origin) * pxPerDay`, and changing zoom only changes how many days fit in the viewport.

**Bars made of real segments.** Instead of CSS gradients, each bar is a row of flex children, one per story, separated by a hairline. It's simple, and it scales from 1 to 40 stories.

**Caching that survives hot reload.** Jira responses are cached in memory for 24 hours. The cache lives on `globalThis`, otherwise Next.js hot reload creates separate copies and "Sync" clears only one of them.

## What I learned

Most tools I use every day cover 80% of what I need. The last 20% usually means paying for a plugin, filing a feature request that might ship in a year and a half, or living without it.

This project changed that trade-off for me. With an AI pair programmer, a focused internal tool takes a weekend, not a quarter. The barrier to custom tooling is less and less about skill, and more about the habit of accepting the gap.
