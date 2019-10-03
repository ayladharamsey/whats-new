import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = ( {newsArticles, selectedArticle, linkOut } ) => {
    return (
        <main>
            {selectedArticle ? <NewsArticle key={selectedArticle.id} story={selectedArticle} linkOut={linkOut}/> :
                newsArticles.map(article => <NewsArticle key={article.id} story={article} linkOut={linkOut}/>)}
        </main>
    )
}

export default NewsContainer;