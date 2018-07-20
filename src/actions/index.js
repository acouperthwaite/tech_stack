export const selectedLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};



// to simplify:
// action creators are functions which return actions
//object with a type propery is an action
//that object wrapped by a function is an action creator

// actions are used to tell reducers to update in a very specific fashion
