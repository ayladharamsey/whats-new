import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ story }) => {
   return (
       <article>
           <img src={story.img} alt={story.headline}></img>
           <h4>{story.headline}</h4>
           <p>{story.description}</p>
           <button> Read More </button>
       </article>
   )
}

export default NewsArticle;