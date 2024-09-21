/**
 * Sports.jsx
 * 
 * This file contains the Sports page.
 * The Sports page is used to display the sports updates and route users to other info.
 */

import React, { useState, useEffect } from 'react';

import { Typography, Box, Grid, Card, CardContent, CardMedia, CircularProgress } from '@mui/material';

const Sports = () => {
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating API call with setTimeout
        setTimeout(() => {
            setSports([
                { id: 1, title: "NBA Finals: Team A vs Team B", description: "Game 7 of the NBA Finals set for tonight.", imageUrl: "https://example.com/nba-finals.jpg" },
                { id: 2, title: "World Cup Qualifiers", description: "Country X secures spot in next year's World Cup.", imageUrl: "https://example.com/world-cup.jpg" },
                { id: 3, title: "Tennis Grand Slam Update", description: "Top seed advances to semifinals in thrilling match.", imageUrl: "https://example.com/tennis.jpg" },
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
                Sports Updates
            </Typography>
            <Grid container spacing={3}>
                {sports.map((item) => (
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

export default Sports;
