import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = props => {
    return (
        <main>
            {props.local.map(newsStory => <NewsArticle key={newsStory.id} news={newsStory}/>)}
        </main>
    )
}

export default NewsContainer;