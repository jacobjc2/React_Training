import React, {forwardRef, useImperativeHandle, useRef} from 'react'
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score =  Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  // Decouples the ref from the dialog component, allowing devs that use this method to only ever use the open() method
  // and not worry about any code changing within this particular component
  useImperativeHandle(ref, () => {
    return {
        open() {
            dialog.current.showModal();
        }
    };
  });

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
        {userLost ? <h2>You Lost!</h2> :
                    <h2>Your Score: {score}</h2>} 
        <p>The target time was: <strong>{targetTime}</strong></p>
        <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
  )
})

export default ResultModal;