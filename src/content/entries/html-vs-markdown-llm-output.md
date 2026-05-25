---
type: post
title: "HTML vs Markdown: The LLM Output Format Debate"
description: "Thariq Shihipar (Claude Code) and Andrej Karpathy are pushing for HTML as the default LLM output format. Here's why it matters and where Markdown still wins."
pubDate: 2026-05-25
tags: ["ai", "html", "markdown", "llm"]
readingTime: "4 min"
---

A few weeks ago I stumbled upon an article that made me rethink something I'd taken for granted for years. It was written by Thariq Shihipar, engineering lead for Claude Code at Anthropic, and the title is a nod to Karpathy's famous 2015 post on recurrent neural networks: *"The Unreasonable Effectiveness of HTML."*

The thesis is straightforward: does it still make sense for LLMs to output Markdown?

Thariq says no, and I'll admit I raised an eyebrow at first. Markdown is everywhere. READMEs, technical docs, notes, specs. It's simple, quick to write, Git-friendly. It was born to be hand-written and readable even without rendering. But that's exactly the point: Markdown was designed for us humans doing the writing. When a model generates the content, those constraints disappear. An LLM doesn't need a simplified syntax. It can produce HTML natively.

And the benefits are more concrete than I expected. HTML gives you real tables, column layouts, cards, badges, proper typography. Throw in some JavaScript and you get interactive charts, dashboards, clickable prototypes. No Markdown previewer, no intermediate conversions: open the file in a browser and it just works. Share it via a link or email it and it's immediately accessible to anyone, on any device.

Thariq says he's stopped using Markdown entirely for almost everything, and that within the Claude Code team this is becoming the norm. Karpathy, in several recent appearances, has pushed in the same direction: the AI tooling ecosystem is moving toward interactive HTML, CSS, and JavaScript artifacts rather than static Markdown documents.

That said, HTML isn't a silver bullet. The Hacker News discussion, where the article racked up 528 points and 99 comments, surfaced some fair criticisms. HTML is significantly more verbose: we're talking 2 to 4 times the tokens compared to Markdown, and at current API prices that adds up. Git diffs become unreadable, so for documents that need versioning, Markdown still wins. And if you need to manually edit something an LLM generated, wrangling raw HTML is a lot more painful than tweaking Markdown.

As usual, the way out is pragmatic. I really liked the synthesis one HN commenter offered: "HTML for deliverables, Markdown for infrastructure." When you're producing something meant to be consumed by a human (a report, a presentation, a dashboard), use HTML. When the document lives in a Git repo and needs to be maintained over time, Markdown remains the better choice.

There are also hybrid approaches gaining traction: MDX, which blends Markdown with React components, or GitHub-Flavored Markdown, which already supports tables, Mermaid diagrams, task lists, and inline HTML.

What fascinates me about this debate is that it signals a deeper shift. AI agents are no longer just assistants handing us a block of text. They're becoming primary content producers. And when a machine is the author, the format can be optimized for the reader (visual richness, interactivity) rather than the writer (markup simplicity). HTML is simply the most powerful format we have for communicating visually rich information.

Markdown isn't going anywhere, to be clear. For technical documentation, personal notes, and anything that needs to be read in source form, it remains unmatched. But the era where everything coming out of an LLM had to be Markdown is over. And honestly, it's about time.

**Source:** [Thariq Shihipar - The Unreasonable Effectiveness of HTML](https://x.com/i/article/2052796100608974848) (May 8, 2026)
**HN discussion:** [528 points, 99 comments](https://news.ycombinator.com/item?id=48071940)
