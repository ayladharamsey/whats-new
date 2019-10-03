import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ story, linkOut }) => {
   return (
       <article>
           <img src={story.img} alt={story.headline}></img>
           <h4>{story.headline}</h4>
           <p>{story.description}</p>
           <button onClick={() => linkOut(story.id)}> Read More </button>
       </article>
   )
}

export default NewsArticle;