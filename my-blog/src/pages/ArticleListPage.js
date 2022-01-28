import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from '../data/article-content';

const ArticleListPage = () => (
    <>
        <h1>Article List</h1>
        <ArticlesList articles={articleContent} />
    </>
);

export default ArticleListPage;
