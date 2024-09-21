/**
 * News.jsx
 * 
 * This file contains the News page.
 * The News page is used to display the news updates and route users to other info.
 */

import React, { useState, useEffect } from 'react';

import { Typography, Box, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating API call
        setTimeout(() => {
            setNews([
                { id: 1, title: "Major Sports Event Announced", description: "A new international sports event has been scheduled for next year.", imageUrl: "https://example.com/sports-event.jpg" },
                { id: 2, title: "Celebrity Couple Splits", description: "Hollywood's favorite couple announces their separation after 10 years.", imageUrl: "https://example.com/celebrity-news.jpg" },
                { id: 3, title: "New Movie Breaks Box Office Records", description: "The latest blockbuster surpasses expectations with record-breaking opening weekend.", imageUrl: "https://example.com/movie-poster.jpg" },
            ]);
            setLoading(false);
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
                Latest News
            </Typography>
            <Grid container spacing={3}>
                {news.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={item.imageUrl}
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

export default News;
