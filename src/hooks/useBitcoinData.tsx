import { useEffect, useState } from "react";

export function useBitcoinData(url: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.bitcoin);
      });
  }, [url]);
  return data;
}
