import { useReducer } from "react";
import { reducerOne } from "@/utils/reducer";

export default function UseReducerDemoOne() {
  // useReducer takes a reducer function and the initial state value
  // returns array with the state variable and a dispatch function
  const [counter, dispatch] = useReducer(reducerOne, 0);
  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer
    dispatch({ type: "decrement" });
  };
  const handleIncrement10x = () => {
    dispatch({ type: "increment10x" });
  };
  const handleDecrement10x = () => {
    dispatch({ type: "decrement10x" });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold m-4">Reducer Buttons Demo</h2>
      <h2>Count: {counter}</h2>
      <button
        className="text-blue-500 font-bold hover:text-blue-600"
        onClick={handleIncrement}
      >
        Reducer Increment
      </button>
      <button
        className="text-blue-500 font-bold hover:text-blue-600"
        onClick={handleDecrement}
      >
        Reducer Decrement
      </button>
      <button
        className="text-blue-500 font-bold hover:text-blue-600"
        onClick={handleIncrement10x}
      >
        Reducer Increment 10x
      </button>
      <button
        className="text-blue-500 font-bold hover:text-blue-600"
        onClick={handleDecrement10x}
      >
        Reducer Decrement 10x
      </button>
    </div>
  );
}
