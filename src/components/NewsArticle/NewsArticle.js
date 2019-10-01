import React from 'react';
import './NewsArticle.css';

const NewsArticle = story =>{
   return (
       <article>
           <h4>{story.story.headline}</h4>
           <p>{story.story.description}</p>
           <button> Read More </button>
       </article>
   )
}

export default NewsArticle;