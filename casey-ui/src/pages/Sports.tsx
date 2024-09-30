/**
 * Sports.jsx
 * 
 * This file contains the Sports page.
 * The Sports page is used to display the sports updates and route users to other info.
 */

import React, { useState, useEffect } from 'react';

import { Typography, Box, CircularProgress } from '@mui/material';
import ContentList from '../components/ContentList';
import { api } from '../services/api';
import LeagueList from '../components/LeagueList';
import { Article } from '../models/article';

const Sports = () => {
    const [sports, setSports] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.sports.fetchTrendingSports().then(setSports).catch(console.error).finally(() => setLoading(false));
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
            <Typography variant="h4" component="h2" gutterBottom>
                Sports Leagues
            </Typography>
            <LeagueList />
            <Typography variant="h4" component="h2" gutterBottom>
                Sports Articles
            </Typography>
            <ContentList articles={sports} />
        </Box>
    );
};

export default Sports;
