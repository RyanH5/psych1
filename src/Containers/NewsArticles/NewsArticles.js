import React from 'react';
import Article from '../../Components/Article/Article';
import "./NewsArticles.css";
import PropTypes from 'prop-types';

export const NewsArticles = ({articles}) => {
  const displayArticles = 
      articles.map((article, index) => {
        return <Article {...article} key={index}/>
      })

  return (
    <div className="displayed-articles">{displayArticles}</div>
  )
}

NewsArticles.propTypes = {
  articles: PropTypes.articles
}