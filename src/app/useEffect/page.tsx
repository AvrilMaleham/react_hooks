"use client";
import { useState } from "react";

export default function useEffectDemo() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

  const [currency, setCurrency] = useState(currencies[0]);
  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold m-5">useEffectDemo</h1>

      <h3 className="text-2xl font-bold m-4">Bitcoin Exchange Rate</h3>
      <label className="text-xl font-bold m-3">
        Choose currency:
        <select className="text-black ml-3" value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    </div>
  );
}
