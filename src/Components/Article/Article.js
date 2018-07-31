import React from 'react';
import "./Article.css";

const Article = (props) => {

  return (
    <a 
      className="single-article"
      target="_blank" 
      href={props.url}
      >
      <div className="article-container">
      <span className="link-text">{props.title}</span>
      <img 
        className="news-image"
        src={props.urlToImage} 
      />
      <p>{props.description}</p>
      <h5 className="article-author">{props.author}</h5>
      <h6 className="article-source">{props.source.name}</h6>   
      </div> 
    </a> 
  )     
}

export default Article;