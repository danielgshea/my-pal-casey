/**
 * News.tsx
 * 
 * This file contains the News page.
 * The News page is used to display the news updates and route users to other info.
 */

import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';
import { ArticleList, Article } from '../models/Article';

const News: React.FC = () => {
    const [articles, setArticles] = useState<ArticleList>({ articles: [] });
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:8000/trending/news');
                const data: ArticleList = await response.json();
                setArticles(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);
            }
        };

        setTimeout(fetchNews, 1000);
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Latest News
            </Typography>
            <Grid container spacing={3}>
                {articles.articles.map((article: Article) => (
                    <Grid item xs={12} sm={6} md={4} key={article.url}>
                        <Card sx={{ cursor: 'pointer' }} onClick={() => window.open(article.url, '_blank')}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={article.urlToImage || ''}
                                alt={article.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {article.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default News;
