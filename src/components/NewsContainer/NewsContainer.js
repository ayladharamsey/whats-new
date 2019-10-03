import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ( {newsArticles, selectedArticle } ) => {
    return (
        <main>
            {(selectedArticle) ? <NewsArticle key={selectedArticle.id} story={selectedArticle}/> :
                newsArticles.map(article => <NewsArticle key={article.id} story={article}/>)}
        </main>
    )
}

export default NewsContainer;