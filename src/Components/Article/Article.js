import React from 'react';
import "./Article.css";

const Article = (props) => {

  return (
    <div className="single-article">
      <a 
        className="article-link" 
        target="_blank" 
        href={props.url}
        >
        {props.title}
      </a> 
      <img 
        className="news-image"
        src={props.urlToImage} />
      <p>{props.description}</p>
      <h5 className="article-author">{props.author}</h5>
      <h6 className="article-source">{props.source.name}</h6>    
      
    </div>
  )
}

export default Article;