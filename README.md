# declutter

> A gamified task manager where your virtual room reflects your unfinished workload.

**React · Vite · localStorage · Progressive Visual State**

---

## 30-Second Read

| | |
|---|---|
| **Concept** | Turn task accumulation into a visible room state |
| **Interaction** | Add, complete, and remove tasks |
| **Visual feedback** | Room becomes more cluttered as unfinished work increases |
| **Persistence** | Tasks survive refresh through localStorage |
| **Frontend** | React + Vite |
| **Current scope** | Client-side productivity prototype |

declutter explores a simple behavioral idea:

**What if an overflowing task list became something you could actually see?**

Instead of representing workload only as rows in a to-do list, declutter maps the number of unfinished tasks to a room that becomes progressively messier.

Complete tasks and the room becomes cleaner again.

<!--
Application walkthrough will be added later:

docs/demo/declutter-demo.gif
-->

---

## Interaction Model

    Add task
       |
       v
    Pending task count
       |
       v
    Select room state
       |
       +---- 0–3 tasks  -> Clear
       |
       +---- 4–6 tasks  -> Building
       |
       +---- 7–9 tasks  -> Cluttered
       |
       +---- 10+ tasks  -> Overloaded
       |
       v
    Complete tasks
       |
       v
    Room improves

---

## Core Experience

### Add tasks

Tasks are entered directly inside the application rather than through a browser prompt.

Each task receives a unique identifier and is added to the active task index.

### Complete tasks

Tasks can be marked complete or returned to the active state.

Only unfinished tasks contribute to the room's clutter level.

### Visual workload state

The application maps pending task count to four original pixel-art room states.

| Pending Tasks | Environment |
|---:|---|
| `0–3` | Clear |
| `4–6` | Building |
| `7–9` | Cluttered |
| `10+` | Overloaded |

### Persistence

Tasks are stored in the browser using `localStorage`, so the task list remains available after a refresh.

### Cleanup

Completed tasks can be removed individually or cleared together.

---

## Component Model

    App
    |
    +-- Header
    |   +-- Open task count
    |
    +-- Hero
    |   +-- Current room state
    |
    +-- Room Panel
    |   +-- Pixel-art environment
    |   +-- State label
    |   +-- Workload scale
    |
    +-- Task Panel
        +-- Task input
        +-- Active/completed task list
        +-- Completion controls
        +-- Delete controls

---

## Technology

| Layer | Technology |
|---|---|
| Interface | React |
| Build tooling | Vite |
| State | React hooks |
| Persistence | Browser localStorage |
| Styling | Responsive CSS |
| Visual system | Original pixel-art room states |

---

## Repository Structure

    declutter/
    ├── src/
    │   ├── images/
    │   │   ├── 1clean.png
    │   │   ├── 2clean.png
    │   │   ├── 3dirty.png
    │   │   └── 4dirty.png
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    │
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── README.md

---

## Local Development

Clone the repository:

    git clone https://github.com/fzinnah17/declutter.git
    cd declutter

Install dependencies:

    npm install

Start the development server:

    npm run dev

Build the application:

    npm run build

---

## Project Evolution

The original declutter prototype was created as a collaborative project exploring the intersection of productivity and game-like feedback.

The early project experimented with React, Flask, Django, and SQLite while the team explored approaches for task storage and application state.

The maintained portfolio edition focuses the repository on the interaction that defined the original concept:

**unfinished tasks change the visual state of the room.**

The current version modernizes the frontend with Vite, replaces browser prompts with an integrated task workflow, adds completion and deletion controls, introduces browser persistence, and preserves the original pixel-art room progression.

The experimental backend code is preserved in the historical project lineage but is not part of the maintained application.

---

## Original Team

Original application design and development were completed collaboratively by:

**Farnaz Zinnah**

**Xin Yi Li**

**Omina Elsheikh**

**Catherine Matta**

The portfolio maintenance work preserves the original concept, collaboration credit, and visual assets while modernizing the runnable frontend.

---

## Status

    STATUS        maintained portfolio prototype
    CLIENT        React / Vite
    PERSISTENCE   localStorage
    INTERACTION   task lifecycle
    VISUAL MODEL  workload -> room state
    BACKEND       not required by maintained edition
