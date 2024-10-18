import React from 'react'

export default function ResultModal({ result, targetTime, ...props}) {
  return (
    <dialog className="result-modal">
        <h2>
            You {result}
        </h2>
        <p>The target time was: <strong>{targetTime}</strong></p>
        <p>You stopped the timer with <stron>X seconds left.</stron></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
  )
}
