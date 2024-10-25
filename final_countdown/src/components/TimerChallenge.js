import React, { useRef, useState } from 'react';
import ResultModal from './ResultModal';

// Cannot set it here because this variable is stored outside the instance of the component
// this timer is then shared across all of the challenges
// let timer;

export default function TimerChallenge({title, targetTime}) {
    // Ref will not be reset or cleared when the component is re-evaluated
    // Value will not be lost when a state value changes
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < (targetTime * 1000);

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        //dialog.current.showModal();
        // useImperativeHandle connected the dialog ref to an imperative handle in the ResultModal, exposed open() method
        dialog.current.open();
    }

    // Variable will not work here because when state changes, the component is re-evaluated
    // After the timer is started, states are set and the component re-evaluates, then setting the timer variable to nothing
    // let timer;

    function handleStart() {
        // Refs can be used to point to more than just html elements in the JSX
        timer.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => {
                return prevTimeRemaining - 10;
            })
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

  return (
    <>
        <ResultModal 
            ref={dialog} 
            targetTime={targetTime} 
            remainingTime={timeRemaining} 
            onReset={handleReset}
        />
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 && 's'}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? "Stop" : "Start"} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? "Time is Running..." : "Timer Inactive"}
            </p>
        </section>
    </>
  )
}
