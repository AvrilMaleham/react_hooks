"use client";
import { useEffect, useState } from "react";
import BackButton from "@/components/backButton";

export default function useEffectDemo() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

  const [currency, setCurrency] = useState(currencies[0]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((json) => {
        setValue(json.bitcoin[currency.toLowerCase()]);
      });
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="flex flex-col items-center justify-center h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold m-5">useEffect Demo</h1>

      <h3 className="text-2xl font-bold m-4">Bitcoin Exchange Rate</h3>
      <label className="text-xl font-bold m-3">
        Choose currency:
        <select
          className="text-black ml-3"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {options}
        </select>
      </label>
      <p className="font-bold mb-10">
        1 BTC is worth {value} {currency}
      </p>
      <BackButton />
    </div>
  );
}
