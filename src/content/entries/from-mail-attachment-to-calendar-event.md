---
type: "project"
name: "School Sync"
title: "From email attachment to calendar event"
description: "An n8n workflow that reads the PDFs my daughter's school sends by email, extracts the event with Gemini and adds it to my Google Calendar automatically."
pubDate: "2026-03-15"
role: "Builder"
tools: ["n8n", "Gemini", "Gmail API", "Google Calendar API"]
year: "2026"
status: "live"
story:
  problem: "The school announces events in PDF attachments with an empty email body. Each time I had to open the PDF, read the date and create the calendar event by hand."
  approach: "A five-node n8n workflow: a Gmail trigger, Gemini reading the PDF, a validation step and a Google Calendar node that creates the event."
  role: "Idea and build: my first n8n workflow, done in about 45 minutes."
  status: "Running on my Gmail and calendar, so school events no longer slip through."
  next: "Reuse the same pattern (trigger, extract, validate, act) for invoices, forms and deadlines buried in other attachments."
---

## The idea

My daughter's school secretary writes event details in **attachments** instead of the email body. Subject: "Important event". Body: empty. Attachment: a PDF with date, time and reason.

Every time, the same routine: open the email, open the PDF, open Google Calendar, create the event. A simple "add to calendar" link in the email would solve it, but we can't always change how others work. So I handled it on my side, and used it as an excuse to try n8n for the first time.

The bigger point: automating small, annoying tasks is surprisingly simple. Once you've done it once, you start seeing how many daily chores could disappear.

## What it does

**School Sync** watches my inbox and does the routine for me:

```
School email → read the PDF → extract the event → validate → create calendar event
```

When an email from the school arrives with an attachment, the event appears in my Google Calendar a minute later, titled "School – …", with the right start and end time.

## How I built it

The workflow has five nodes:

1. **Gmail Trigger**: checks the inbox every minute, only for emails from the school secretary, and downloads attachments automatically.
2. **Google Gemini (document analysis)**: receives the PDF and returns `title`, `start_date` and `end_date` as JSON in ISO 8601. Because it understands the document rather than matching text, it works even on crooked scans full of logos. Gemini Flash Lite is free for this use.
3. **Information Extractor**: validates Gemini's output against a fixed schema, fixing date formats and flagging missing fields. Not strictly necessary, but a cheap safety net.
4. **Gemini Chat Model**: the language model the Information Extractor uses behind the scenes.
5. **Google Calendar**: creates the event with the extracted title, prefixed with "School", and the start and end time.

### Google setup

n8n needs permission to read Gmail and write to Calendar:

1. In the [Google Cloud Console](https://console.cloud.google.com) create a project and enable the **Gmail API**, the **Google Calendar API** and the **Generative Language API**.
2. Configure the **OAuth consent screen** (External) with the scopes `gmail.readonly` and `calendar`.
3. Create an **OAuth 2.0 Client ID** and paste its data into a **Google OAuth2** credential in n8n.
4. Create an **API key** for Gemini and add it as a **Google Gemini API** credential in n8n.

## What I learned

I had never used n8n before and the workflow was running in 45 minutes. The real takeaway is the pattern behind it, which works for almost any data trapped in a file:

1. **Trigger**: when does it happen? An email, a new file, a time of day.
2. **Extract**: how do I get the data? Read the attachment, parse the page, ask an LLM.
3. **Validate**: is the data right? A schema, a rule, a check.
4. **Act**: what do I do with it? Create a record, send a message, write a file.

The same four steps can turn invoices into spreadsheet rows, forms into contacts, screenshots into tasks and PDF deadlines into reminders.
