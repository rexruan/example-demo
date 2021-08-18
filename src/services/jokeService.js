import axios from 'axios';

const baseUrl = 'https://api.chucknorris.io/jokes';

const getCategories = async () => {
  const response = await axios.get(`${baseUrl}/categories`);
  return response.data
};

const getRandomJoke = async (category) => {
  const response = await axios.get(`${baseUrl}/random?category=${category}`);
  return response.data;
};

const searchJokes = async (query) => {
  try { const response = await axios.get(`${baseUrl}/search?query=${query}`);
    return response.data;
  } catch(err) {
    console.log(err);
  };
};

const jokeService = {
  getCategories,
  getRandomJoke,
  searchJokes,
};

export default jokeService;
