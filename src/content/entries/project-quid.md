---
type: "project"
title: "Quid - Turn notes into tasks with AI"
description: "Transmuting notes into tasks. A workspace designed to close the gap between potential energy (ideas) and kinetic energy (actions)."
pubDate: "2026-02-06"
role: "Full Stack Developer & Interaction Designer"
tools: ["Next.js", "Gemini 1.5 Flash", "Convex", "Framer Motion"]
year: "2026"
featured: true
---

## The Concept: Potential vs Kinetic

**QUID** started with a simple observation: most people have a "note graveyard" and a "task list," but very little bridge between them. Notes are pure potential energy—ideas, snippets, inspirations. Tasks are kinetic energy—actions, deadlines, commitments.

I wanted to build an app where there is no distinction in the _engine_, only in the _state_. An item is a "Note" until you **ACTIVATE** it.

## AI Brainstorming: The Activation Bridge

During the design phase, I used AI to redefine what "Activation" actually means. We moved away from simple checkmarks and towards a "Transformation" logic.

AI (Gemini 1.5 Flash) was integrated not just as a chatbot, but as a **Structural Parser**. The brainstorming focused on how AI could see a messy note about "fixing the garden" and propose three concrete, actionable tasks: "Buy mulch," "Prune the roses," and "Check irrigation timing."

## Implementation: High-Contrast Interaction

The build was focused on **Speed and Materiality**.

- **Tech**: Next.js 14 and Convex allowed for a fully reactive, real-time feel.
- **Style**: I went for a high-contrast, dark-first design. The "Purple Accent" (`#8B5CF6`) was chosen to represent the energy shift during activation.
- **Micro-interactions**: Using Framer Motion, the transition of a note moving into a task "Level" was made to feel weighty and permanent.

## The Reality Check: The Friction of Choice

Once the MVP was ready, I tested it with my own workflow.

**The Discovery**: I found that the AI "Proposals" were incredibly useful when I was tired, but the manual activation felt like a chore. The biggest reality check was realizing that **Activation is a cognitive tax**. Just because the app makes it easy to turn a note into a task doesn't mean I actually want to _do_ the task.

**The Refinement**: My initial thought was that _more_ tasks = more productivity. The reality was that QUID made it too easy to clutter my task list with low-value actions transformed from incidental notes.

**Verdict**: The "Notes and Tasks as the same object" philosophy is technically sound and feels elegant, but the UI needs to guard against "Task Inflations." The project proved that AI is great at breaking things down, but the human still needs a "gatekeeper" mode to prevent overwhelm.
