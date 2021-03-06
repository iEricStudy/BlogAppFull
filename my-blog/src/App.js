import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <div id='page-body'>
                    <Routes>
                        <Route path='/' element={<HomePage />} exact />
                        <Route path='/about' element={<AboutPage />} exact />
                        <Route path='/articles-list' element={<ArticleListPage />} exact />
                        <Route path='/article/:name' element={<ArticlePage />} exact />
                        <Route path='/*' element={<NotFoundPage />}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
