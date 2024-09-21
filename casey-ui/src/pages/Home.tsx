/**
 * Home.tsx
 * 
 * This file contains the Home page.
 * The Home page is used to display the home page of the app.
 */

import React from 'react';

import { Typography, Box, Grid, Paper } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to C.A.S.E.Y.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                (Cool Ass Sports and Entertainment Yapper)
            </Typography>
            <Grid container spacing={3} sx={{ mt: 2 }}>

                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2, cursor: 'pointer' }} onClick={() => window.location.href = '/sports'}>
                        <Typography variant="h6" gutterBottom>
                            Latest Sports News
                        </Typography>
                        <Typography variant="body1">
                            Stay up to date with the latest sports headlines and scores.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2, cursor: 'pointer' }} onClick={() => window.location.href = '/news'}>
                        <Typography variant="h6" gutterBottom>
                            Entertainment Updates
                        </Typography>
                        <Typography variant="body1">
                            Get the latest buzz from the world of entertainment and pop culture.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
