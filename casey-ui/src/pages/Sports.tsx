/**
 * Sports.jsx
 * 
 * This file contains the Sports page.
 * The Sports page is used to display the sports updates and route users to other info.
 */

import React, { useState, useEffect } from 'react';

import { Typography, Box, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

import { ArticleList, Article } from '../models/Article';

const Sports = () => {
    const [sports, setSports] = useState<ArticleList>({ articles: [] });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating API call with setTimeout
        setTimeout(() => {
            const fetchSports = async () => {
                try {
                    const response = await fetch('http://localhost:8000/trending/sports');
                    const data: ArticleList = await response.json();
                    setSports(data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching news:', error);
                    setLoading(false);
                }
            };
        }, 1000);
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
                Sports Updates
            </Typography>
            <Grid container spacing={3}>
                {sports.articles.map((item: Article) => (
                    <Grid item xs={12} sm={6} md={4} key={item.url}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.urlToImage || ''}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Sports;
