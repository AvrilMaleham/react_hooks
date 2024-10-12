import { useState, useEffect } from "react";

export function useNumberFactData(url: string): string | null {
  // state variable for holding fetched json data
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.text()) // Change to .text() to handle string response
        .then((text) => {
          if (!ignore) {
            setData(text); // Set data directly as text
          }
        })
        .catch(() => {
          if (!ignore) {
            setData(null); // Handle fetch error
          }
        });

      // Cleanup function, in case URL changes before completion
      return () => {
        ignore = true;
      };
    }
  }, [url]); // Re-run effect if URL changes

  // return the data fetched from the given url
  return data;
}
