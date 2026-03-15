---
type: post
title: "From attachment to new calendar event"
description: "How I automated calendar event creation from email attachments sent by my daughter's school"
pubDate: 2026-03-15
tags: ["n8n", "automation"]
readingTime: "3 min"
---

# How I automated my daughter's school in less than an hour (without ever using n8n before)

When you discover that your daughter's school secretary writes event times in **attachments** instead of in the email body, a normal person resigns themselves to it. I instead spent an hour building an automation that does it for me.

It's a story that demonstrates something important: automating stupid things is _frighteningly simple_. If you do it once in n8n, you discover that 70% of your daily tasks could disappear tomorrow morning.

## The Problem

The school sends emails like this:

> **Subject:** Important Event
>
> Text: [empty]
>
> **Attachment:** school_event_document.pdf

Inside the PDF? The date, time, reason. Beautiful. Naturally I read the email, open the PDF, search for Google Calendar, create the event. **Every damn time.**

It would be nice if it magically appeared in the calendar? Yes.
Note: It would be enough if they added that nice "add to calendar" CTA in the email but on the other hand we can't always tell others what to do so let's handle it ourselves and that's it.

I'll do it myself, I wanted to try using N8N anyway. I'll try with this use case.

## The Solution: 5 Nodes, 45 Minutes

Here's the workflow I built:

```
School Email → Extract PDF → Gemini reads PDF → Structure Data → Create Calendar Event
```

Simple? Too simple. Too good to be true. Yet it works.

Let's look at the nodes one by one.

### 1️⃣ Gmail Trigger: "Hey, there's an email"

```
Node: Gmail Trigger
Trigger every: 1 minute
Filter: email from [school_secretary]
```

**What it does:** Checks Gmail and launches the automation only when an email from the secretary arrives that contains an attachment.

**Why this node:** We need a trigger, that is, the "when" of the workflow. We could check every minute, but n8n is smart: it activates the flow only when an email enters. I also tell it to "download attachments automatically" because I need the PDF immediately.

**Setup:** You need to have Gmail OAuth credentials configured in n8n. I'll get to that later.

### 2️⃣ Analyze Document (Google Gemini): "Read the PDF"

```
Node: Google Gemini Vision
Input: attachment_0 (the PDF)
Prompt: "Extract title, start_date, end_date in JSON format"
```

Here's the stroke of genius. Gemini doesn't just read text: **it reads and understands binary files**. I send the PDF, I ask it to extract:

- **title**: a short name for the event (e.g., "Father's Day", "Meeting")
- **start_date**: when it starts (ISO 8601 format: `2026-03-25T14:30:00+01:00`)
- **end_date**: when it ends

Gemini examines the PDF (whether it's a scanned document, table, drawing) and returns a clean JSON to me.

**Why:** LLMs can "understand" context. It's not regex on raw text. If the PDF is crooked, poorly scanned, has the school logo everywhere? Gemini reads it anyway.

**Cost:** Gemini Flash Lite is free.

### 3️⃣ Information Extractor: "Validate the data"

```
Node: Information Extractor
Input: Gemini's output
Schema: { title: string, start_date: date, end_date: date }
```

What Gemini passes me is a JSON string. This node **structures and validates** the JSON according to a predefined schema.

It's not essential (I could skip it), but it's good practice:

- If Gemini returns dates in the wrong format → it corrects them
- If a field is missing → it alerts me
- Transforms raw text into a clean object

**Why:** Because in workflows, data quality is everything. This node is a safety net.

### 4️⃣ Google Gemini Chat Model: "The LLM Model"

Ah, this node seems strange to those who don't know AI. It's there because the **Information Extractor** needs a language model to work. I don't configure it directly in the workflow, but I connect it "behind the scenes."

**Why:** It's the engine that makes the Information Extractor work. If it's not there, the node doesn't know how to structure the data.

### 5️⃣ Create an Event (Google Calendar): "Write to the calendar"

```
Node: Google Calendar
Calendar: [my gmail calendar]
Title: "School - {{ extracted_title }}"
Start: {{ start_date }}
End: {{ end_date }}
```

Here the flow ends. I create an event in Google Calendar with:

- The title extracted from the PDF (with "School" prefix to recognize it)
- The start and end date/time

**Why:** This is the final output. This is where the automation touches my calendar and my time.

## Setup: The Google APIs You Need to Create

Before starting everything, you need to give n8n permission to read Gmail and write to Calendar. You need to create two OAuth applications in the **Google Cloud Console**.

### Step 1: Google Cloud Console

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (e.g., "n8n-automations")
3. In the search bar, type "Gmail API" → Enable
4. In the search bar, type "Google Calendar API" → Enable

### Step 2: OAuth Consent Screen

1. In the left menu, go to **OAuth consent screen**
2. Choose "External" (you're the one using it)
3. Fill it in: app name, email, summary
4. In "Scopes", add:
   - `https://www.googleapis.com/auth/gmail.readonly`
   - `https://www.googleapis.com/auth/calendar`

### Step 3: Credentials

1. **Create credentials** → **OAuth 2.0 Client ID**
2. Choose **Desktop application** (doesn't matter, just need credentials)
3. Download the JSON
4. In n8n: **New Credential** → **Google OAuth2** → Paste data from JSON

### Step 4: Google Gemini API

1. In the Console, search for "Generative Language API" → Enable
2. **Create credentials** → **API Key**
3. Copy the key
4. In n8n: **New Credential** → **Google Gemini API** → Paste the key

Done. Now n8n has the permissions.

## Conceptually: What We Did

If I'm trying to automate a task with attachments and data inside files:

1. **Trigger**: When does it happen? (Email received, file created, specific time)
2. **Extract**: How do I extract the data? (Read attachment, parse HTML, ask an LLM)
3. **Validate**: Is the data correct? (Schema, regex, logic)
4. **Action**: What do I do with the data? (Create record, send message, write file)

In our case:

- ✅ Trigger: Gmail receives email
- ✅ Extract: Gemini reads the PDF
- ✅ Validate: Information Extractor structures
- ✅ Action: Calendar API creates event

You can replicate this pattern for:

- **Attached invoices** → Extract amount and date → Insert in spreadsheet
- **Filled forms** → Extract fields → Create contact
- **Message screenshots** → Read text → Create task
- **Deadlines in PDF** → Extract dates → Configure reminder

The principle is always the same.

## The Final "Wow"

I spent **45 minutes** building this workflow. I had never used n8n before. I'm not an n8n developer, I don't know all the nodes.

Yet it's functional, practical, and I don't risk missing events.

---

**TL;DR:** The secretary writes events in attachments → I create a workflow that reads the PDF with Gemini → Extracts date and title → Creates the calendar event automatically. Total: 45 minutes, zero previous n8n experience, guaranteed savings.
