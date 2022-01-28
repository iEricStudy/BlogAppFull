import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddComentForm from '../components/AddCommentForm';
import ArticleList from '../components/ArticlesList';
import CommentsList from '../components/ComentsList';
import UpvotesSection from '../components/UpvotesSection';
import articleContent from '../data/article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const {name} = useParams();
    const article = articleContent.find(article => 
        article.name === name);

    const relatedArticles = articleContent.filter(article => article.name !== name);

    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    }, [name]);
    
    if(!article)
        return <NotFoundPage />
    return(
        <>
            <h1>{article.title}</h1>
            <UpvotesSection
                articleName={name}
                upvotes={articleInfo.upvotes}
                setArticleInfo={setArticleInfo}
            />
            {
                article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))
            }
            <CommentsList comments={articleInfo.comments} />
            <AddComentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles:</h3>
            <ArticleList articles={relatedArticles} />
        </>
    );
}

export default ArticlePage;
