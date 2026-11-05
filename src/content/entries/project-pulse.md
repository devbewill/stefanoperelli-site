---
type: "project"
name: "Pulse"
title: "A note-taking stream that remembers for you"
description: "Write in a single, endless stream. While you type, Pulse quietly brings back what you already wrote on the same topic, using semantic search instead of folders and tags."
pubDate: "2026-03-01"
role: "Builder"
tools: ["Next.js", "Convex", "Vector Search", "TipTap", "Transformers.js"]
year: "2026"
featured: true
status: "live"
story:
  problem: "Folders, tags and graph views turn note-taking into admin work. The act of thinking gets buried under the effort of deciding where each note should go."
  approach: "A single chat-like stream with no folders. While you type, the text is turned into embeddings and matched against past notes, so related thoughts surface on their own."
  role: "Concept, interaction design and build, using AI to explore the trade-offs of semantic retrieval."
  status: "Live and tested on my own daily logs. The retrieval works; the experience still needs tuning."
  next: "Make suggestions 'polite': show fewer and better matches, give more weight to recent notes, and add an AI summary layer for reviewing the stream."
---

## The idea

Pulse came from a frustration with traditional note-taking apps. Every tool asks you to organise first and think later: which folder, which tag, which page. I wanted the opposite: a tool that never asks where a note goes, and instead tells you what you've already thought about the topic.

The picture in my head was a chat with my own past self. One infinite vertical stream, where every entry is a heartbeat, hence the name.

## What it does

- **One stream, no structure**: you just write, like in a chat.
- **Context while you type**: every few keystrokes the current text is compared with all previous notes, and the closest ones appear next to the editor.
- **Search without searching**: you don't type queries. Related notes find you while the thought is still forming.

## How I built it

Before writing code I used AI to explore the hard questions of semantic retrieval:

- **Local or cloud embeddings?** Running models in the browser with `transformers.js` keeps notes private, an API is faster to set up.
- **Signal or noise?** How many matches are useful before suggestions become a distraction? AI helped me simulate scenarios before building them.

The build pairs a custom **TipTap** editor, tuned for a chat-like flow, with **Convex** as backend. The text being typed is debounced, vectorised and matched with **Convex Vector Search** against thousands of previous entries. Matching takes well under a second, so suggestions appear while the sentence is still being written.

## What I learned

Testing it on real daily logs was humbling. At first Pulse showed matches for every single sentence, and it felt like someone whispering in my ear while I was trying to talk. The key lesson: **semantic relevance is not cognitive relevance**. Two notes can be similar without being useful to each other in that moment.

I added "soft context" rules: higher similarity thresholds and more weight to recent notes. I also realised that an infinite stream is great for capturing thoughts, but poor for reviewing them without a summary layer on top.

The idea holds. The interface has to be polite: present when you need it, invisible when you don't. It's a tool for non-linear thinkers, and it still needs a few linear constraints to be useful.
