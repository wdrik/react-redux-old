export default (state = {}, action) => {
  switch(action.type) {
    case 'SAY_HELLO':
      return Object.assign({}, state, { data: 'Hello world' });
    default:
      return state
  }
}