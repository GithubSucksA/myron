import { useState } from "react";

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);
  
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
    
      async function handleClick() {
        setPending(pending + 1);
        await delay(3000);
        setPending(p => p - 1);
        //setPending(pending - 1);     these 2 statements show the working of useState snapshot / batch working & how to manipulate it.
        //setCompleted(completed + 1);    another way of manipulating it is flushSync
        setCompleted(c => c + 1);
      }
  
    return (
      <>
        <h3>
          Pending: {pending}
        </h3>
        <h3>
          Completed: {completed}
        </h3>
        <button onClick={handleClick}>
          Buy     
        </button>
      </>
    );
  }