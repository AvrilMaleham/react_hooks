import { useState } from "react";
import { useNumberFactData } from "../hooks/useNumberFactData";

export default function UseCustomDemoTwo() {
  // Fetches a random number fact

  const [number, setNumber] = useState(1);

  // uses custom hook to handle the effect for loading external data
  const data = useNumberFactData(`http://numbersapi.com/${number}`);

  // get the fact or show error message if failed
  const fact = data ? data : "Error";

  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <h2 className="text-2xl font-bold m-4">Extract Effects Demo</h2>

      <label className="mb-4">
        Pick a number:
        <select
          className="text-black ml-3"
          value={number}
          onChange={(e) => setNumber(parseFloat(e.target.value))}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <div>
        <strong>Fun fact: </strong>
        {fact}
      </div>
    </div>
  );
}
