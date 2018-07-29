import { secondaryFetch } from '../apiCalls/apiCalls';

export const cleanPsychArticles = (articles) => {
  const cleanedPsychArticles = articles.map(async article => {
    const author = article.author;
    const description = article.description;
    const publishedAt = article.publishedAt;
    const source = article.source;
    const title = article.title;
    const url = article.url;
    const urlToImage = urlToImage
    return ({
      author,
      description,
      publishedAt,
      source,
      title,
      url,
      urlToImage
    })
  })
  return Promise.all(cleanedPsychArticles)
}
