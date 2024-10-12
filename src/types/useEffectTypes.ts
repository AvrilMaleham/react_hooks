type BitcoinValue = {
    [key: string]: number; 
  };

export interface FetchSuccessAction {
    type: "FETCH_SUCCESS";
    payload: BitcoinValue;
  }
  
  export interface FetchErrorAction {
    type: "FETCH_ERROR";
    payload: string; 
  }

 export type BitcoinResponseAction = FetchSuccessAction | FetchErrorAction;

 export interface BitcoinState {
    loading: boolean;
    value: BitcoinValue;
    error: string;
  }