import React from 'react';
import './NewsArticle.css';

const NewsArticle = story => {
   return (
       <article>
           <h4>{story.title}</h4>
           <p>{story.description}</p>
           <button> Read More </button>
       </article>
   )
}

export default NewsArticle;