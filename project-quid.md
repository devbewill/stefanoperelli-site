# QUID - Project Documentation

## Overview

**QUID** — "Potential noted. Action defined."

A minimal web app where notes and tasks are two states of the same item. A Note is potential energy (an idea); a Task is that energy activated and made actionable. The core flow is selecting notes and **ACTIVATING** them into tasks (manually or via AI).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), TypeScript |
| Styling | Tailwind CSS (no CSS modules) |
| Animation | Framer Motion |
| Backend + DB | Convex |
| AI | Google Gemini API (`gemini-1.5-flash`) |
| Auth | Convex Auth (email/password + Google OAuth) |

## Development Commands

```bash
# Install dependencies
npm install

# Start development (Next.js + Convex)
npx convex dev   # Convex backend (separate terminal)
npm run dev      # Next.js frontend

# Build
npm run build

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

## Architecture

### Data Model

Notes and tasks share the same lifecycle. The key differentiator is `parentTaskId` on notes:

- **Top-level note**: `parentTaskId === undefined` — appears in Level 1 feed
- **Child note**: `parentTaskId` set to a task ID — appears as Level 2 under that task
- **Task**: has `linkedNoteIds[]` pointing to its source notes

**ACTIVATE flow**: select top-level notes → create task → notes get `parentTaskId` set → they move from Level 1 to Level 2 under the new task.

### Shared Status System

Both notes and tasks use the same 3 status values:
- `"idle"` — To Do
- `"active"` — In Progress
- `"completed"` — Done

**NO distinction** between note and task statuses in the backend.

### Database Schema (Convex)

**Notes Table** (`notes`):
```typescript
{
  ownerId: id("users"),
  title: string,
  text: string,
  status: "idle" | "active" | "completed",
  startDate?: number, // Unix ms
  dueDate?: number, // Unix ms
  tags?: string[],
  tagColors?: Array<{name: string, color: string}>,
  isPinned?: boolean,
  deletedAt?: number,
  parentTaskId?: id("tasks"), // undefined = top-level
  createdAt: number,
  updatedAt: number,
}
// Indexes:
// - by_owner: ["ownerId"]
// - by_owner_and_parent: ["ownerId", "parentTaskId"]
```

**Tasks Table** (`tasks`):
```typescript
{
  ownerId: id("users"),
  title: string,
  text: string,
  status: "idle" | "active" | "completed",
  startDate?: number, // Unix ms
  dueDate?: number, // Unix ms
  linkedNoteIds: id("notes")[], // source notes
  aiProposals?: string[],
  isPinned?: boolean,
  deletedAt?: number,
  createdAt: number,
  updatedAt: number,
}
// Indexes:
// - by_owner: ["ownerId"]
```

**Tags System**:
- Tags are stored per note in `tags[]` array
- Colors are stored per note in `tagColors[]` array
- Global tag colors are computed from all notes
- TagsPanel allows changing global colors
- When creating/editing a note, tags use global colors or default (#8B5CF6)

## Directory Structure

```
convex/
  schema.ts              # DB schema (users, notes, tasks tables)
  lib/auth.ts            # requireOwner() helper — used in every query/mutation
  notes.ts               # listTopLevel, listByTask, create
  tasks.ts               # listAll, createFromNotes, deleteAndRestoreNotes
  ai.ts                  # generateProposals (Gemini action)
  users.ts               # exportData, requestDeletion, cancelDeletion, updateProfile
  tags.ts                # updateTagColor for global tag colors
  scheduled/
    hardDeleteUsers.ts   # Cron job: hard-delete users 30 days after soft-delete

app/
  layout.tsx             # Geist font, global providers, dark mode by default
  page.tsx               # Main dashboard: sidebar + feed, filters, handlers
  landing/page.tsx        # Landing page
  privacy/page.tsx        # Privacy Policy (IT/EN toggle)
  terms/page.tsx          # Terms of Service
  signin/page.tsx         # Sign in page

components/
  Feed.tsx               # Two-level table (notes + tasks)
  QuickAdd.tsx           # Minimal input bar for creating notes
  ActivateBar.tsx        # Floating bottom bar when notes are selected
  ActivateModal.tsx       # Modal with Manual/AI tabs for task creation
  ConsentBanner.tsx       # First-visit cookie banner (localStorage)
  AccountMenu.tsx        # Slide-over panel: profile, export, delete
  DeleteAccountModal.tsx  # "Type DELETE to confirm" modal
  ExportDataButton.tsx    # Triggers JSON download via users.exportData
  Sidebar.tsx            # Navigation with filters (Inbox, Active, Todo, Done, Tags, Trash)
  ThemeToggle.tsx        # Icon-based switch (purple dot on white pill)
  ViewModeSelector.tsx    # Icon-based selector (Grid/Timeline/Board)
  CreateButton.tsx        # "+ New" button (no shortcut shown)
  SearchBar.tsx          # Search input
  MarkdownEditor.tsx      # Full-featured editor with toolbar, fullscreen, preview
  NoteEditPanel.tsx       # Edit note panel (60% width, tags system)
  TaskEditPanel.tsx       # Edit task panel (60% width, linked notes)
  CreateModal.tsx         # Create note/task modal
  TagsPanel.tsx          # Manage global tag colors
  CommandPalette.tsx       # Cmd+K search (Cmd+N removed)
  KanbanView.tsx          # Kanban board view (draggable cards)
  TimelineView.tsx        # Timeline view (grouped by date)
  TrashView.tsx           # Trash view
  NoteCard.tsx            # Reusable note card
  AiAssistant.tsx         # AI assistant for proposals

hooks/
  useLocale.ts           # IT/EN locale context

lib/
  cn.ts                  # classnames utility
  types.ts               # TypeScript types (NoteDoc, TaskDoc, etc.)

DESIGN_SYSTEM_V3.md      # Complete design system documentation
tailwind.config.ts        # V3 token mappings
app/globals.css          # V3 CSS variables
CLAUDE.md               # Instructions for Claude/AI
```

## Key Patterns

### Data Isolation
Every Convex query/mutation touching `notes` or `tasks` must call `requireOwner()` from `convex/lib/auth.ts`. Never accept `userId` from the client — always derive it from the authenticated session server-side.

```typescript
// convex/lib/auth.ts pattern
const user = await requireOwner(ctx, resourceOwnerId);
// throws UNAUTHENTICATED, FORBIDDEN, or ACCOUNT_DELETED
```

### View Modes
The app supports 4 view modes:
- `"table"` — Default table view (Feed component)
- `"timeline"` — Timeline grouped by date (TimelineView component)
- `"kanban"` — Kanban board with columns (KanbanView component)
- `"trash"` — Trash view (TrashView component)

### Filters
The main dashboard supports filtering by:
- **Status filter**: `"all" | "idle" | "active" | "completed"`
- **Type filter**: `"all" | "note" | "task"`
- **Tag filter**: `string | null`
- **Search**: text search across notes/tasks

Sidebar provides quick filters:
- **Inbox** → All notes + tasks (no filters)
- **Todo** → Notes + tasks with status="idle"
- **Active** → Notes + tasks with status="active"
- **Done** → Notes + tasks with status="completed"
- **Tags** → Opens TagsPanel to manage global colors
- **Trash** → Trash view mode

### Task Deletion Rule
Deleting a task does NOT delete its linked notes. Instead, set `parentTaskId = undefined` on each linked note to restore them to the top-level feed.

## Design System (V3)

### Theme
- **Default**: Dark mode (`className="dark"` on html element in layout.tsx)
- **Colors**:
  - Background: `#050508` (bg-bg-primary)
  - Surface: `#0B0B0B` (bg-bg-surface) — used for sidebar and main
  - Elevated: `#161616` (bg-bg-elevated) — used for cards
  - Accent Primary: `#8B5CF6` (purple)
  - Text Primary: `#E8E8E8`
  - Text Secondary: `#666666`

### UI Conventions
- **Flat design**: No gradients, no glow effects, no glassmorphism
- **Layered shadows**: Only solid shadows, no blur
- **High contrast**: Text must be clearly readable
- **Typography**: Geist font (from next/font/google)

### Sidebar
- **Width**: 300px when expanded, 60px when collapsed
- **Collapse button**: Positioned at `right-2` (8px inside sidebar)
- **Selected state**: `bg-accent-lighter` background with `text-accent-primary` (no border)

### Edit Panels
- **Width**: 60% (w-3/5 max-w-5xl)
- **Height**: 72vh
- **Layout**: Two columns
  - Left (w-56): Metadata (status, dates, tags)
  - Right (flex-1): MarkdownEditor

### Markdown Editor
- **Full-featured**: Toolbar with all formatting options
- **View modes**: Edit, Split, Preview
- **Fullscreen**: Toggle button (expand/compress icon)
- **Height**: `h-full` to fill available space

### Card Colors
- **Sidebar & Main background**: `bg-bg-surface`
- **Kanban/Timeline cards**: `bg-bg-elevated` (lighter than background)

## Recent Modifications

### Completed Changes
1. **Dark theme as default** — Added `className="dark"` to html element
2. **ViewModeSelector** — Icon-based (Grid/Timeline/Board) between Search and Create
3. **ThemeToggle in sidebar** — Icon-based switch with purple dot
4. **Inline counters** — "Notes X | Tasks Y" instead of boxes
5. **Edit panels transparency fixed** — Added AnimatePresence with backdrop
6. **MarkdownEditor redesigned** — All icons correct, fullscreen restored, height fixed
7. **Edit panels width** — Increased from 50% to 60%
8. **Task linked notes** — Click closes task panel, opens note panel
9. **Cmd+N shortcut removed** — Completely removed from code and UI
10. **CreateButton** — No "⌘N" badge shown
11. **Textarea height** — Now fills entire available space
12. **Tags system** — Enter key support, no "+" button, no color picker
13. **TagsPanel** — Shows only existing tags (filtered)
14. **Sidebar filters** — Working for note + task by status
15. **Sidebar width** — 300px
16. **Sidebar collapse button** — Positioned at right-2
17. **Todo filter** — Added "Todo" showing idle items
18. **Sidebar active state** — Highlighted with bg-accent-lighter
19. **Card backgrounds** — Changed to bg-bg-elevated for visibility
20. **Main background** — Changed to bg-bg-surface (same as sidebar)

### Key Features Implemented

**Sidebar Navigation:**
- Inbox (all items)
- Todo (idle items)
- Active (active items)
- Done (completed items)
- Tags (open TagsPanel)
- Trash (trash view)

**Tags System:**
- Add tag by typing name and pressing Enter
- Autocomplete with existing tags
- Global color management via TagsPanel
- TagsPanel shows only existing tags
- Default color: #8B5CF6 for new tags

**MarkdownEditor:**
- Toolbar with: Bold, Italic, Strikethrough, H1/H2/H3, Bulleted/Numbered lists, Quote, Inline code, Code block, Horizontal divider, Link, Image, Fullscreen
- Three view modes: Edit, Split, Preview
- Fullscreen mode with ESC to exit
- Proper height handling

**View Modes:**
- Table (default feed)
- Timeline (grouped by date)
- Kanban (draggable columns)
- Trash

**Editing:**
- NoteEditPanel (60% width, tags, status, dates)
- TaskEditPanel (60% width, linked notes with click-to-edit, status, dates)
- Both have transparent backgrounds with dark overlays

## Current State

### Working Features
- ✅ All view modes (Table, Timeline, Kanban, Trash)
- ✅ Sidebar filters (Inbox, Todo, Active, Done, Tags, Trash)
- ✅ Note and task creation/editing
- ✅ Tags system with autocomplete and global colors
- ✅ Markdown editor with full toolbar and fullscreen
- ✅ AI task activation proposals
- ✅ Dark theme as default
- ✅ Theme toggle in sidebar
- ✅ Command palette (Cmd+K)
- ✅ Search functionality
- ✅ Pin/unpin notes and tasks
- ✅ Due dates with overdue highlighting
- ✅ Status management (idle/active/completed)
- ✅ Account management (profile, export, delete)

### Design System Status
- ✅ V3 design system fully implemented
- ✅ Dark theme default
- ✅ Flat UI with layered shadows
- ✅ High contrast typography
- ✅ Purple accent (#8B5CF6)
- ✅ Sidebar width 300px
- ✅ Card backgrounds bg-bg-elevated
- ✅ Main background bg-bg-surface

### Known Issues / Limitations
- None currently known

## Environment Variables

```
CONVEX_DEPLOYMENT=          # Convex project URL
NEXT_PUBLIC_CONVEX_URL=     # Convex public URL
GEMINI_API_KEY=             # Google Gemini API key
```

## Compliance (GDPR)

### User Soft-Delete Flow
1. `requestDeletion`: sets `isDeleted: true`, `deletionScheduledAt: now + 30 days`
2. During 30-day window: user cannot log in; show reactivation screen
3. `cancelDeletion`: resets the flags
4. `hardDeleteUsers` cron: after 30 days, permanently deletes user + all their notes/tasks

### Registration
- Requires unchecked-by-default consent checkbox accepting Privacy Policy + Terms
- Stores `privacyAcceptedAt` (timestamp) and `privacyPolicyVersion`

### Data Export
- `users.exportData` action returns JSON with account info, notes, tasks
- Excludes `ipHash`, `userAgent`, internal Convex IDs from export

### Consent Banner
- Stores `quid_consent_v1 = "accepted"` in `localStorage`
- Only essential session cookies — no tracking

## AI Prompt

Used in `ai.generateProposals` (server-side Convex action):

```
You are an assistant that converts raw notes into actionable tasks.
Given the following notes, extract the underlying intent and generate exactly 3 concise, actionable task proposals.
Each proposal must be a single sentence starting with a verb (e.g., "Request", "Schedule", "Define").
Return ONLY a JSON array of 3 strings. No explanation.

Notes:
{{notes_content}}
```

## Important Notes for Context Recovery

### Code Structure
- This is a **Next.js 14 App Router** project with **Convex** backend
- All database operations go through Convex queries/mutations
- Authentication handled by Convex Auth
- State management uses React hooks + Convex real-time queries

### Key Design Decisions
1. **Unified status system**: Notes and tasks share the same 3 status values
2. **Two-level hierarchy**: Top-level notes → can be activated into tasks → linked notes become children
3. **Dark-first design**: Default theme is dark, with light support
4. **Flat aesthetics**: No gradients, no glassmorphism, just layered surfaces
5. **Purple accent**: All interactive elements use #8B5CF6
6. **60% edit panels**: Note and task edit panels are 60% wide

### Recent Architecture Changes
- Sidebar filters now use both `statusFilter` and `typeFilter`
- Added `activeFilter` state to track which sidebar filter is active
- Removed Cmd+N shortcut completely (no code, no UI indication)
- MarkdownEditor uses `h-full` for proper height filling
- TagsPanel filters to show only existing tags (not deleted ones)
- Main background changed to match sidebar (`bg-bg-surface`)

### When Starting Fresh
1. Run `npx convex dev` in one terminal
2. Run `npm run dev` in another terminal
3. Check `DESIGN_SYSTEM_V3.md` for design tokens
4. Use sidebar filters for quick access (Inbox/Todo/Active/Done)
5. Use ViewModeSelector to switch views
6. Edit panels have tags with Enter key, no "+" button
7. Cmd+K opens command palette, Cmd+N does NOT work (removed)
