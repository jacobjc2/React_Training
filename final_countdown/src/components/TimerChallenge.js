import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';

// Cannot set it here because this variable is stored outside the instance of the component
// this timer is then shared across all of the challenges
// let timer;

export default function TimerChallenge({title, targetTime}) {
    // Ref will not be reset or cleared when the component is re-evaluated
    // Value will not be lost when a state value changes
    const timer = useRef();

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    // Variable will not work here because when state changes, the component is re-evaluated
    // After the timer is started, states are set and the component re-evaluates, then setting the timer variable to nothing
    // let timer;

    function handleStart() {
        setTimerStarted(true);
        // Refs can be used to point to more than just html elements in the JSX
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

    }

    function handleStop() {
        clearTimeout(timer.current);
    }

  return (
    <>
        {timerExpired && <ResultModal targetTime={targetTime} result={"lost"}/> }
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 && 's'}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? "Time is Running..." : "Timer Inactive"}
            </p>
        </section>
    </>
  )
}
