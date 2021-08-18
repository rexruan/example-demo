import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { searchJokeReducer } from '../../reducers/jokeReducer';


// when we want to watch input on real time 
const SearchForm = () => {
  const [newSearchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const getSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };
  // dispatch search query and store query in redux
  const handleSearchQuery = (event) => {
    event.preventDefault();
    dispatch(searchJokeReducer(newSearchQuery));
    setSearchQuery('');  
  };
  return (
    <form onSubmit={handleSearchQuery}>
      <input
        type="text"
        value={newSearchQuery}
        onChange={getSearchQuery}
      />
      <button type="submit">Search</button>
    </form>
  )
};

export default SearchForm;
