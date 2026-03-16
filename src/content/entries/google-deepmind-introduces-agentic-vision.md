---
type: post
title: "Google DeepMind introduces Agentic Vision to Gemini 3 Flash"
description: "Google DeepMind introduces Agentic Vision for better understand images"
pubDate: 2026-03-16
tags: ["deepmind", "Agentic Vision"]
readingTime: "3 min"
---

Google DeepMind just did something interesting with Gemini 3 Flash by adding what they call "Agentic Vision." Here's the thing: most AI models look at an image once, like taking a quick glance and moving on. Gemini now does something different. It can zoom in, manipulate the image, examine details systematically, then figure out what it's really looking at.

Think of it like the difference between glancing at a receipt and actually reading every line. The model now generates Python code to inspect images methodically. It zooms in on specific areas, looks for details like street signs or serial numbers on microchips, takes notes, and uses what it finds to build a more accurate understanding.

The way this works is what Google calls a Think-Act-Observe loop. First, Gemini reads your question and studies the image, making a plan about what to do. Then it writes Python code to actually manipulate and analyze that image. Finally, it looks at what happened and uses that information to answer your question properly, grounding everything in actual visual evidence instead of guessing.

The practical impact is solid. Google saw quality improvements of 5 to 10 percent across vision benchmarks. More importantly, this reduces hallucinations, which is the annoying problem where AI makes stuff up about what it sees. By running actual code to inspect images rather than just relying on pattern matching, the model becomes more reliable.

One of the clever features is iterative zooming, where the model can look at the same image multiple times, each time focusing on different parts. It can also draw bounding boxes and annotations to help itself understand what it's counting or analyzing.

Google plans to keep expanding this. They want to add more implicit behaviors so certain capabilities that currently need a specific prompt will just happen automatically. They're also thinking about adding web search and reverse image search to the toolkit. The question is worth sitting with: when AI systems can actively investigate and methodically verify what they see, does that change how much we should trust them? Does active analysis make an AI more trustworthy than passive pattern recognition?

**News released:** 2026-01-29
**Fonte:** [Google DeepMind Blog](https://blog.google/innovation-and-ai/technology/developers-tools/agentic-vision-gemini-3-flash/)
