import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = props => {
    return (
        <div>
            {props.map(newsStory => <NewsArticle key ={newsStory.id}/>)}
        </div>
    )
}

export default NewsContainer;