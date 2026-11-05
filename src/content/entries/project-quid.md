---
type: "project"
name: "Quid"
title: "Notes and tasks as the same object"
description: "A workspace where notes and tasks are the same thing in two states. Activate a note and AI breaks it down into concrete, actionable tasks."
pubDate: "2026-02-06"
role: "Full Stack Developer & Interaction Designer"
tools: ["Next.js", "Convex", "Gemini 1.5 Flash", "Framer Motion"]
year: "2026"
featured: true
status: "off"
links:
  - label: "See it in action"
    url: "https://quid-notes.vercel.app/landing-page"
story:
  problem: "Most people keep a 'note graveyard' and a separate task list, with almost nothing connecting the two. Ideas stay ideas and never turn into action."
  approach: "One engine for both: an item is a note until you activate it. On activation, Gemini reads the note and proposes concrete tasks."
  role: "Product concept, interaction design and full-stack build."
  status: "No longer online. The MVP ran with a public demo and was tested on my own workflow."
  next: "Add a 'gatekeeper' mode that helps decide which notes deserve to become tasks, to prevent task inflation."
---

## The idea

Quid started from a simple observation: notes and tasks live in different places, and very little connects them. Notes are potential energy: ideas, snippets, inspirations. Tasks are kinetic energy: actions, deadlines, commitments.

I wanted an app with no distinction in the engine, only in the state. An item is a note until you **activate** it, and activation is the moment an idea becomes work.

## What it does

- **Capture freely**: everything starts as a note, with no structure required.
- **Activate**: when a note is ready, one action turns it into tasks.
- **AI breakdown**: Gemini reads a messy note, for example about "fixing the garden", and proposes concrete steps: "Buy mulch", "Prune the roses", "Check irrigation timing".
- **Feel the shift**: the transition from note to task is animated to feel weighty and permanent, not like ticking a box.

## How I built it

The build focused on speed and materiality:

- **Stack**: Next.js 14 and Convex for a fully reactive, real-time interface.
- **AI as a parser, not a chatbot**: Gemini 1.5 Flash is used as a structural parser that turns free text into a list of actionable tasks.
- **Design**: high-contrast and dark-first, with a single purple accent (`#8B5CF6`) that marks the energy shift during activation.
- **Micro-interactions**: Framer Motion animates the move of a note into the task "level".

## What I learned

The AI proposals were most useful when I was tired, exactly when breaking things down is hardest. But the real lesson was another one: **activation is a cognitive tax**. Making it easy to turn a note into a task doesn't mean I actually want to do that task.

I started from the idea that more tasks means more productivity. In practice Quid made it too easy to fill my list with low-value actions born from incidental notes.

Treating notes and tasks as one object is technically sound and feels elegant. But the interface has to guard against task inflation: AI is great at breaking things down, and a human still needs to decide what is worth doing.
