//@ts-check


/**
 * @typedef {Object} State
 * @prop {number} value
 */
export const State = {
    value : 0,
}

/**
 * Return the current value of the State
 * @callback getState
 * @returns {State} 
 */

/**
 * @return {number} 
 */
export const getState = () =>{
    return State.value
}

