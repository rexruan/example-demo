import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import categoryReducer from "./reducers/categoryReducer";
import jokeReducer from "./reducers/jokeReducer";

const reducer = combineReducers({
  categories: categoryReducer,
  searchedJokes: jokeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
