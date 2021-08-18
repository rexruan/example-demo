import jokeService from "../services/jokeService";

const categoryReducer = (state=[], action) => {
  switch (action.type) {
    case 'INIT_CATEGORIES':
      return action.categories;
    default:
      return state;
  };
};


export const initializeCategories = () => {
  return async dispatch => {
    const categories = await jokeService.getCategories();
    dispatch({
      type: 'INIT_CATEGORIES',
      categories,
    });
  };
};

export default categoryReducer;