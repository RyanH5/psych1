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
      <p>{props.description}</p>
      <h5>{props.author}</h5>
      <h6>{props.source.name}</h6>    
      
    </div>
  )
}

export default Article;