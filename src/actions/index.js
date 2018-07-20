export const selectedLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

//object with a type propery is an action
//that object wrapped by a function is an action creator
