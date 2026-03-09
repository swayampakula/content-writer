import { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [timerMinutes, setTimerMinutes] = useState('')
  const [timeLeft, setTimeLeft] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isStarted) {
      setIsRunning(false)
      setIsStarted(false)
    }
    return () => clearInterval(interval)
  }, [isRunning, isPaused, timeLeft, isStarted])

  const startTimer = () => {
    const minutes = parseInt(timerMinutes)
    if (minutes > 0) {
      setTimeLeft(minutes * 60)
      setIsRunning(true)
      setIsPaused(false)
      setIsStarted(true)
    }
  }

  const pauseTimer = () => {
    setIsPaused(!isPaused)
    if (isPaused) {
      setIsRunning(true)
    } else {
      setIsRunning(false)
    }
  }

  const stopTimer = () => {
    setTimeLeft(0)
    setIsRunning(false)
    setIsPaused(false)
    setIsStarted(false)
  }

  const wordCount = text.replace(/<[^>]*>/g, '').trim().split(/\s+/).filter(word => word.length > 0).length

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const isBlinking = timeLeft <= 60 && timeLeft > 0

  const startButtonText = isPaused ? 'Resume' : 'Start'

  return (
    <div className="app-container">
      <h3>Content writing</h3>
      <div className="main-layout">
        <div className="text-section">
          <label>Your Typing</label>
          <ReactQuill readOnly={!isStarted} value={text} onChange={setText} />
          <div>Word count: {wordCount}</div>
        </div>
        <div className="timer-section">
          <div className={`timer-display ${isBlinking ? 'timer-blink' : ''}`}>Time left: {formatTime(timeLeft)}</div>
          <input
            type="number"
            placeholder="Set timer in minutes"
            value={timerMinutes}
            onChange={(e) => setTimerMinutes(e.target.value)}
          />
          <button onClick={isPaused ? () => { setIsPaused(false); setIsRunning(true); } : startTimer} disabled={isRunning && !isPaused}>{startButtonText} Timer</button>
          <button onClick={pauseTimer} disabled={!isRunning && !isPaused}>Pause Timer</button>
          <button onClick={stopTimer} disabled={!isStarted}>Stop Timer</button>
        </div>
      </div>
    </div>
  )
}

export default App