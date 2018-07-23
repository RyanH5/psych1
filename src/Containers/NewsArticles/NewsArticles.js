import React from 'react';
import Article from '../../Components/Article/Article';

export const NewsArticles = ({articles}) => {
  const numArticles = 3;
  const visibleArticles = articles.slice(0, numArticles)
  const displayArticles = 
      visibleArticles.map((article, index) => {
        return <Article {...article} key={index}/>
      })

  return (
    <div>{displayArticles}</div>
  )
}