import { useEffect, useReducer } from "react";
import axios from "axios";
import { bitcoinAPIResponseReducer } from "@/utils/reducer";
import { type BitcoinState } from "@/types/useEffectTypes";

export function useBitcoinData(url: string) {
  const initialState: BitcoinState = {
    loading: true, 
    value: {}, 
    error: "",
  };

  const [state, dispatch] = useReducer(bitcoinAPIResponseReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.bitcoin });
      } catch (error: unknown) {
        dispatch({ type: "FETCH_ERROR", payload: String(error) });
      }
    };

    fetchData();
  }, [url]);

  return state; 
}