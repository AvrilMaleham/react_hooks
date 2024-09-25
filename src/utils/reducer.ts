// reducer function - can be called anything
// takes two arguments: the current state, and the action to be taken
// action is passed via dispatch, state is stored in component
type Action = { type: "increment" | "decrement" };

export const reducer = (state: number, action: Action): number => {
  switch (
    action.type // switch statements are common in reducers
  ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
// reducer function returns the new value of state after taking action


