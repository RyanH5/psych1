//import { apiKey } from '../apiKey';

const apiKey = '5af41368a09b4d6ca620fc641402597e'
export const fetchArticles = async (searchKeyWord) => {
  console.log(searchKeyWord)
  const url = `https://newsapi.org/v2/everything?q=${searchKeyWord}&from=2018-07-20&sortBy=popularity&apiKey=${apiKey}`;
  const response = await fetch(url);
  const psychNews = await response.json();
  return psychNews;
}

export const secondaryFetch = async (url) => {
  try {
    const response = await fetch(url, {mode: 'no-cors'});
    if (response.status === 200) {
      const secondaryData = await response.json();
      return secondaryData;
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}