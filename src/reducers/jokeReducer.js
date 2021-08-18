import jokeService from "../services/jokeService";

// store fetched joke array when using text search
const jokeReducer = (state=[], action) => {
  switch (action.type) {
    case 'NEW_JOKES':
      return action.jokes;
    default:
      return state;
  };
};


export const searchJokeReducer = (query) => {
  return async dispatch => {
    const jokes = await jokeService.searchJokes(query);
    dispatch({
      type: 'NEW_JOKES',
      jokes: jokes ? jokes.result : [],
    });
  };
};

export default jokeReducer;
