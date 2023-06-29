import { State } from "./state.js";
/**
 * Will be used to increment the count/State.value
 * 
 * @typedef {Callback} Increment
 * @prop {"INCREMENT_COUNT"} type
 * @prop {State}
 */

/**
 * Will be used to decrement the count/State.value
 * 
 * @typedef {Callback} Decrement
 * @prop {"DECREMENT_COUNT"} type
 * @prop {State}
 */

/**
 * Will be used to reset the count/State.value
 * 
 * @typedef {Callback} Reset
 * @prop {"RESET_COUNT"} type
 * @prop {State}
 */

/**
 * Is represented by the different callbacks/actions
 * @typedef {Increment | Decrement | Reset} Action
 */

/**
 * @param {number} State.value
 * @returns {Increment}
 */
export const increment = () => {
  State.value += 1;
  return {
    type: "INCREMENT_COUNT",
  };
};

/**
 * @param {number} State.value
 * @returns {Decrement}
 */
export const decrement = () => {
  State.value -= 1;
  return {
    type: "Decrement_COUNT",
  };
};

/**
 * @param {number} State.value
 * @returns {Reset}
 */
export const reset = () => {
  State.value = 0;
  return {
    type: "RESET_COUNT",
  };
};



/**
 * Dispatches the action to a reducer to change the state according to the action 
 * 
 * @param {Action} action
 */
export const dispatch = (action) => {
  return reducer(State, action);
};



/**
 * Takes an action and changes the State accordingly
 * 
 * @param {State} state
 * @param {Action} action
 * @return {State}
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT": {
      state.value;
    }
    case "DECREMENT_COUNT": {
      state.value;
    }
    case "RESET_COUNT": {
      state.value;
    }
    default:
      return state;
  }
};
