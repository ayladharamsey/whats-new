import React from 'react';
import './NewsArticle.css';

const NewsArticle = story => {
   return (
       <div>
           <h4>{story.title}</h4>
           <p>{story.description}</p>
           <button> Read More </button>
       </div>
   )
}

export default NewsArticle;