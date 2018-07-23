import React from 'react';
import "./Article.css";

const Article = (props) => {

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h5>{props.author}</h5>
      <h6>{props.source.name}</h6>    
      <a 
        className="article-link" 
        target="_blank" 
        href={props.url}
        >
        {props.url}
      </a> 
    </div>
  )
}

export default Article;