export default (state = {}, action) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      let newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
};
