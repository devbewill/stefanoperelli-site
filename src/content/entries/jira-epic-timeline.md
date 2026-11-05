---
type: "project"
name: "HubLab"
title: "One hub for everything that happens around Jira"
description: "An internal governance hub built on top of Jira: portfolio and timelines, sprints, releases and deployments, pull requests, support tickets and SLAs, timesheets, costs, risks and UAT test books, all in one place and always up to date."
pubDate: "2026-03-21"
role: "Product owner & builder"
tools: ["React", "TanStack", "Node.js", "PostgreSQL", "Prisma", "Jira REST API", "Claude Code"]
year: "2026"
featured: true
status: "live"
story:
  problem: "The information a delivery team needs every day is scattered: epics in Jira boards, releases in another view, pull requests in the code host, support tickets in the service desk, hours in timesheets, risks in spreadsheets. Answering a simple question like 'are we on track?' meant opening five tools."
  approach: "A web app that keeps its own copy of the Jira data, refreshed every few minutes, and builds focused views on top of it: one section per question the team actually asks, from 'what ships next week' to 'how much did this initiative cost'."
  role: "Product vision, information design and most of the build, pairing with Claude Code. It started as a weekend experiment and became the tool the team opens every morning."
  status: "In daily use by the team. New sections are added when a recurring question shows up in meetings."
  next: "A KPI layer with two levels of detail: operational metrics (cycle time, throughput, bottlenecks) for the team, and a red-amber-green summary for leadership, both computed from the same data."
---

## The idea

HubLab started small: I wanted to see the critical epics of several Jira projects on a single timeline, something Jira doesn't do without a paid add-on. I built that view on a weekend, and the team started using it.

Then the questions kept coming. Which releases are going out this week? Which pull requests are waiting for review? How many support tickets are about to break their SLA? Where did the hours go this month? Each answer lived in a different tool, often in a different format.

So the timeline became a hub. The idea is simple: **one place where the whole delivery picture is visible**, built around the questions a team asks every day, not around the structure of the tools that hold the data.

## What it does

HubLab is organised in sections, each answering a specific question:

- **Overview**: the state of work across all projects at a glance, with what is blocked or stalled.
- **Portfolio & timeline**: initiatives and epics on a zoomable Gantt, with story progress drawn inside each bar, plus planning views to compare what was planned with what is happening.
- **Sprints**: health of the running sprints for every board, with committed and completed work.
- **Releases & deployments**: what is going to staging and production, with generated release notes.
- **Pull requests**: open reviews across repositories, so nothing waits too long.
- **Support**: incoming tickets, their history and SLA status, to spot problems before they become escalations.
- **Timesheet**: logged hours by person and period, without exporting anything to a spreadsheet.
- **Costs & risks**: effort turned into cost per initiative, and a RAID log (risks, assumptions, issues, dependencies) with a risk matrix.
- **Test books**: UAT test cases generated from the sprint content, with pass and fail results.
- **Docs & changelog**: internal guides, and a log of every data sync so anyone can check the data is fresh.

A small back office manages users, roles and which sections each person can see.

## How I built it

**A local copy of Jira.** The first version called the Jira API on every page load. It was slow and hit rate limits. Now a background scheduler keeps a replica in PostgreSQL: every few minutes it downloads only the tickets that changed since the last run, along with their status history and work logs. Reference data (projects, boards, versions) refreshes hourly, and a daily reconcile step removes what was deleted in Jira. The app reads only from the replica, so pages are fast and the API is touched by a single process.

**Status history as raw material.** Storing every status transition, not just the current status, is what makes the interesting views possible: time spent in each state, bottlenecks, rework, cycle time. Most of the KPI work ahead is a query on that table.

**Safe by design.** Sync errors never take the app down: a failed cycle simply retries on the next run, because the sync cursor only moves forward when a run succeeds. With more than one server running, a lock makes sure only one of them syncs at a time.

**AI as a pair programmer.** Almost every section was designed and built with Claude Code. That changed the cost of an idea: a new view for a recurring question takes an afternoon, so it gets built instead of staying on a wish list.

## What I learned

The tools a team uses every day cover 80% of what it needs. The missing 20% is usually the part that connects them: a view across projects, across tools, across roles. That is where most of the time in status meetings goes.

HubLab taught me that a delivery manager who can build can close that gap directly. The best sections were not planned: they came from noticing the same question asked in three meetings in a row. Keeping the data in one place made each new answer cheap, and having the answers on screen changed the meetings themselves: less time collecting status, more time deciding what to do about it.
