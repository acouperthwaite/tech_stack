export default (state = null, action) => { //es6 magic... if state is undefined, return null
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default: //when called with an action we don't care about
      return state; //return state that we returned last time (don't change anything)
  }
};
