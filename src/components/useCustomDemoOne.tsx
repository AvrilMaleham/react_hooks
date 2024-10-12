import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export default function UseCustomDemoOne() {
  const [status, setStatus] = useState("");

  // use our custom hook instead of useState directly
  const [nameInputProps, resetName] = useFormInput("Mary");
  const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");

  function handleSubscribe() {
    resetName();
    resetEmail();
    setStatus("Thanks for subscribing!");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold m-4">Reusable Form Input Demo</h2>

      <div className="flex flex-col items-center justify-center">
        <label className="mb-4">
          First name: <input     className="text-black" {...nameInputProps} />
        </label>
        <label className="mb-4">
          Email: <input     className="text-black" {...emailInputProps} />
        </label>

        <button className="mb-4 text-blue-500 font-bold hover:text-blue-600" onClick={handleSubscribe}>Subscribe</button>
        <div >{status}</div>
      </div>
    </div>
  );
}
