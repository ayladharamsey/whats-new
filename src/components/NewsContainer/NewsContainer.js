import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ( {newsArticles} ) => {
    return (
        <main>
            {newsArticles.map(article => <NewsArticle key={article.id} story={article}/>)}
        </main>
    )
}

export default NewsContainer;