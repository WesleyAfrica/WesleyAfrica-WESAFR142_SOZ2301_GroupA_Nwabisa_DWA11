import { State,getState } from "./module/state.js"
import { decrement, increment, dispatch, reset } from "./module/actions.js"



console.log(getState())
const number = document.querySelector('[data-number]')
const subtract = document.querySelector('[data-subtract]') 
const add = document.querySelector('[data-add]') 
const resetButton = document.querySelector('[data-reset]')
const overlay = document.querySelector('[data-overlay]')

const subtractHandler = () => {//Used to decrement the count
  dispatch(decrement())
  number.value = State.value
  if(add.disabled === true) {
  add.disabled = false
  }
} 


const addHandler = () => {//Used to increment the count
  dispatch(increment())
  number.value = State.value
  if(subtract.disabled === true) {
  subtract.disabled = false
  }

} 

  const resetHandler = () => {//Used to reset the count
    if(parseInt(number.value) === 0){//If the count is already equal to 0 the action won't be performed
      return
    }
    dispatch(reset())
    number.value = State.value
    overlay.show();
    setTimeout(() => {
      overlay.close();
    }, 1500);
  };
  




subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler) 
resetButton.addEventListener('click', resetHandler)
