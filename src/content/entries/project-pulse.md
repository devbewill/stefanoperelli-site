---
type: "project"
title: "PULSE"
description: "An infinite stream of consciousness powered by real-time semantic retrieval. Your past context, served as you think."
pubDate: "2026-03-05"
role: "Product Architect & Lead Developer"
tools: ["Next.js", "Convex", "Vector Search", "Transformers.js"]
year: "2026"
featured: true
---

## The Concept: Context without Search

The inception of **PULSE** came from a deep frustration with traditional note-taking apps. In a world of folders, tags, and complex graph views, the actual *act* of thinking often gets buried under the administrative burden of organizing. I wanted something that felt like a chat with my own shadow—a single, infinite vertical stream where the UI doesn't ask you where to put a note, but instead tells you what you've thought about this before.

## AI Brainstorming: From Static to Fluid

The brainstorming phase was heavily assisted by AI to explore the boundaries of **Semantic Retrieval**. Instead of "searching" for notes, we explored the idea of "beating" notes—hence the name Pulse. Each entry is a heartbeat.

The core challenge discussed with AI models was the latency of vector embeddings. We debated:
- **Local vs Cloud**: Should we use `transformers.js` to run embeddings in the browser or hit an API?
- **Distraction vs Utility**: How many matches are too many? AI helped simulate scenarios where real-time suggestions could become noise rather than a signal.

## Implementation: The Vector Heartbeat

Building PULSE required a tight integration between the editor and the database. Using **Convex**, I implemented a system where every few keystrokes (debounced), the partial text is vectorized and compared against thousands of previous "heartbeats".

- **Editor**: A custom TipTap implementation optimized for a "chat style" flow.
- **Backend**: Convex Vector Search allowed for sub-second matching, making the context suggestions feel like they were appearing just as the thought was forming.

## The Reality Check: Feeling the Noise

Test phase was brutal. Once I had "touched" the app and started using it for real daily logs, I hit the first wall: **The Over-Prompting Trap**.

Initially, the app would show matching notes for every single sentence. It felt like someone whispering in my ear while I was trying to talk. I realized that *semantic relevance doesn't equal cognitive relevance*.

**The Pivot**: I had to implement "Soft Context" rules—prioritizing recency and setting high similarity thresholds. I also realized that the "Infinite Flow" is great for capture, but terrible for review without an AI-driven summary layer.

**Verdict**: The idea is good, but the UX needs to be "polite." It needs to be there when you need it, and invisible when you don't. It's a tool for non-linear thinkers, but it needs linear constraints to be useful.
