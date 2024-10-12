import { type ActionOne, type ActionTwo, type State } from "@/types/useReducerTypes";
import { type BitcoinResponseAction, type BitcoinState } from "@/types/useEffectTypes";

// reducer function - can be called anything
// takes two arguments: the current state, and the action to be taken
// action is passed via dispatch, state is stored in component


export const reducerOne = (state: number, action: ActionOne): number => {
  switch (
    action.type // switch statements are common in reducers
  ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
      case "increment10x":
        return state + 10;
      case "decrement10x":
        return state - 10;
    default:
      return state;
  }
};
// reducer function returns the new value of state after taking action


// reducer function for axios fetch response
// called from dispatch when state is updated, lets us handle different actions
// return object should match same structure as initial state passed to useReducer
export const reducerTwo = (postsResult: State, action: ActionTwo) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}

export const bitcoinAPIResponseReducer = (bitcoinResult: BitcoinState, action: BitcoinResponseAction) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, value: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, value: {}, error: action.payload };
    default:
      return { ...bitcoinResult, loading: false };
  }
}
