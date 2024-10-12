import { useState } from "react";
import { useBitcoinData } from "@/hooks/useBitcoinData";

export default function useEffectDemoOne() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

  const [currency, setCurrency] = useState(currencies[0]);

  const data = useBitcoinData(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  const value = data ? data : "Error";

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="flex flex-col items-center justify-center">
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
        1 BTC is worth {Object.values(value)[0]} {currency}
      </p>
    </div>
  );
}
