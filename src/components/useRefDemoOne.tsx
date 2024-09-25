/* Ref vs State vs Variable Demo */
// Any variables rendered inside the returned JSX should be
// part of STATE, so that updates trigger re-rendering and keep
// everything in sync. Updates to refs and normal variables DO NOT
// trigger re-renders, so the updated count values don’t show.

import { useRef, useState } from "react";

export default function UseRefDemoOne() {
  const [countState, setCountState] = useState(0); // one counter stored in state

  const countRef = useRef(0); // one counter stored in a ref
  let count = 0; // one counter stored in a normal variable

  function handleClick() {
    // update countRef object when clicking, via current property
    countRef.current = countRef.current + 1;
    count = count + 1; // update count variable when clicking
    // both counts should be the same value
    alert(`You clicked ${countRef.current} (${count}) times!`);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold m-4">Ref vs State vs Variable Demo</h2>
      <button onClick={handleClick}>REF COUNTER: Click me!</button> Ref:{" "}
      {countRef.current} Var: {count} <br />
      <button onClick={() => setCountState(countState + 1)}>
        STATE COUNTER: Click me to update!
      </button>{" "}
      State: {countState}
    </div>
  );
}
