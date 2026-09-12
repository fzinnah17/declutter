import React, {
  useEffect,
  useMemo,
  useState
} from 'react'

import cleanRoom from './images/1clean.png'
import lightClutterRoom from './images/2clean.png'
import clutteredRoom from './images/3dirty.png'
import veryClutteredRoom from './images/4dirty.png'

import './App.css'

const STORAGE_KEY = 'declutter.tasks.v2'

const roomStates = [
  {
    max: 3,
    label: 'Clear',
    note: 'Your space is under control.',
    image: cleanRoom
  },
  {
    max: 6,
    label: 'Building',
    note: 'A few tasks are starting to pile up.',
    image: lightClutterRoom
  },
  {
    max: 9,
    label: 'Cluttered',
    note: 'Your task load needs attention.',
    image: clutteredRoom
  },
  {
    max: Infinity,
    label: 'Overloaded',
    note: 'Time to clear some space.',
    image: veryClutteredRoom
  }
]

const loadTasks = () => {
  try {
    const stored = localStorage.getItem(
      STORAGE_KEY
    )

    return stored
      ? JSON.parse(stored)
      : []
  } catch {
    return []
  }
}

const App = () => {
  const [tasks, setTasks] =
    useState(loadTasks)

  const [taskText, setTaskText] =
    useState('')

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tasks)
    )
  }, [tasks])

  const openTasks = useMemo(
    () =>
      tasks.filter(
        (task) => !task.completed
      ),
    [tasks]
  )

  const completedTasks = useMemo(
    () =>
      tasks.filter(
        (task) => task.completed
      ),
    [tasks]
  )

  const roomState =
    roomStates.find(
      (state) =>
        openTasks.length <= state.max
    ) || roomStates[3]

  const addTask = (event) => {
    event.preventDefault()

    const title = taskText.trim()

    if (!title) return

    setTasks((current) => [
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
        createdAt:
          new Date().toISOString()
      },
      ...current
    ])

    setTaskText('')
  }

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed
            }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((current) =>
      current.filter(
        (task) => task.id !== id
      )
    )
  }

  const clearCompleted = () => {
    setTasks((current) =>
      current.filter(
        (task) => !task.completed
      )
    )
  }

  return (
    <main className="app-shell">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">
            DC
          </span>

          <span className="brand-copy">
            <strong>declutter</strong>
            <small>
              Gamified task room
            </small>
          </span>
        </div>

        <div className="header-status">
          <span>
            {openTasks.length}
          </span>

          <small>
            open tasks
          </small>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            TASK SYSTEM / DC-01
          </p>

          <h1>
            Clear your list.
            <span>
              Clear your room.
            </span>
          </h1>

          <p className="hero-description">
            declutter turns workload into a
            visual environment: as unfinished
            tasks accumulate, the room gets
            progressively messier. Complete
            tasks to restore order.
          </p>
        </div>

        <div className="system-card">
          <div className="system-top">
            <span>ROOM STATE</span>
            <strong>
              {roomState.label}
            </strong>
          </div>

          <div className="room-preview">
            <img
              src={roomState.image}
              alt={`${roomState.label} room state`}
            />
          </div>

          <div className="system-footer">
            <span>
              {openTasks.length} pending
            </span>

            <span>
              {completedTasks.length} complete
            </span>
          </div>
        </div>
      </section>

      <section className="workspace">
        <div className="room-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">
                ENVIRONMENT / LIVE
              </p>

              <h2>
                Your room.
              </h2>
            </div>

            <span className="state-badge">
              {roomState.label}
            </span>
          </div>

          <div className="room-stage">
            <img
              src={roomState.image}
              alt={`${roomState.label} room`}
            />

            <div className="room-caption">
              <span>
                STATE
              </span>

              <strong>
                {roomState.label}
              </strong>

              <p>
                {roomState.note}
              </p>
            </div>
          </div>

          <div className="room-scale">
            <div>
              <span>0–3</span>
              <small>Clear</small>
            </div>

            <div>
              <span>4–6</span>
              <small>Building</small>
            </div>

            <div>
              <span>7–9</span>
              <small>Cluttered</small>
            </div>

            <div>
              <span>10+</span>
              <small>Overloaded</small>
            </div>
          </div>
        </div>

        <div className="task-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">
                TASK INDEX / ACTIVE
              </p>

              <h2>
                Task list.
              </h2>
            </div>

            <span className="task-count">
              {String(
                openTasks.length
              ).padStart(2, '0')}
            </span>
          </div>

          <form
            className="task-form"
            onSubmit={addTask}
          >
            <label htmlFor="task-input">
              NEW TASK
            </label>

            <div className="task-form-row">
              <input
                id="task-input"
                value={taskText}
                onChange={(event) =>
                  setTaskText(
                    event.target.value
                  )
                }
                placeholder="What needs to be cleared?"
                autoComplete="off"
              />

              <button type="submit">
                Add task
              </button>
            </div>
          </form>

          <div className="task-list">
            {tasks.length === 0 && (
              <div className="empty-state">
                <span>00</span>

                <h3>
                  Nothing is piling up.
                </h3>

                <p>
                  Add a task and the room
                  will respond to your
                  workload.
                </p>
              </div>
            )}

            {tasks.map(
              (task, index) => (
                <article
                  className={`task-row ${
                    task.completed
                      ? 'task-row-complete'
                      : ''
                  }`}
                  key={task.id}
                >
                  <button
                    className="task-check"
                    type="button"
                    aria-label={
                      task.completed
                        ? `Mark ${task.title} incomplete`
                        : `Complete ${task.title}`
                    }
                    onClick={() =>
                      toggleTask(
                        task.id
                      )
                    }
                  >
                    {task.completed
                      ? '✓'
                      : ''}
                  </button>

                  <div className="task-main">
                    <span>
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        '0'
                      )}
                    </span>

                    <strong>
                      {task.title}
                    </strong>
                  </div>

                  <button
                    className="task-delete"
                    type="button"
                    onClick={() =>
                      deleteTask(
                        task.id
                      )
                    }
                  >
                    Remove
                  </button>
                </article>
              )
            )}
          </div>

          {completedTasks.length > 0 && (
            <div className="task-footer">
              <span>
                {completedTasks.length}{' '}
                completed
              </span>

              <button
                type="button"
                onClick={
                  clearCompleted
                }
              >
                Clear completed
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default App
