import { apiKey } from '../apiKey';

export const fetchArticles = async (searchKeyWord) => {
  const url = `https://newsapi.org/v2/everything?q=${searchKeyWord}&from=2018-07-20&sortBy=popularity&apiKey=${apiKey}`;
  const response = await fetch(url);
  const psychNews = await response.json();
  return psychNews;
}