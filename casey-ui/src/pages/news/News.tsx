/**
 * News.tsx
 * 
 * This file contains the News page.
 * The News page is used to display the news updates and route users to other info.
 */

import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress, Button } from '@mui/material';
import { Article } from '../../models/article';
import ContentList from '../../components/ContentList';
import { api } from '../../services/api';

const News: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        api.news.fetchTrendingNews().then(setArticles).catch(console.error).finally(() => setLoading(false));
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
            <ContentList articles={articles} />
        </Box>
    );
};

export default News;
