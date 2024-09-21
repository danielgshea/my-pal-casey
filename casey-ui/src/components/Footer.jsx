/**
 * Footer.jsx
 * 
 * This file contains the Footer component.
 * The Footer component is used to display the footer of the app.
 */

import React from 'react';

import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'primary.main',
            color: 'white'
        }}>
            <Container maxWidth="lg">
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} CASEY - Cool Ass Sports and Entertainment Yapper
                </Typography>
                <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                    <Link color="inherit" href="/about">
                        About
                    </Link>
                    {' | '}
                    <Link color="inherit" href="/contact">
                        Contact
                    </Link>
                    {' | '}
                    <Link color="inherit" href="/privacy">
                        Privacy Policy
                    </Link>
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
