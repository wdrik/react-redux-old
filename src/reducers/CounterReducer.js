import * as ActionTypes from './../actions/ActionTypes';

export default (state = 0, action) => {
  switch(action.type) {
    case ActionTypes.ON_INCREMENT:
      // let valueInc = action.payload.value;

      // if(valueInc === undefined) {
      //   valueInc = 0
      // }

      // return Object.assign({}, state, { value: valueInc + 1 });

      return state + 1
    break;

    case ActionTypes.ON_DECREMENT:
      // let valueDec = action.payload.value;

      // if (valueDec === undefined) {
      //   valueDec = 0
      // }

      // return Object.assign({}, state, { value: valueDec - 1 });

      return state - 1
    break;

    default:
      return state
  }
}