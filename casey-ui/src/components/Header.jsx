/**
 * Header.jsx
 * 
 * This file contains the Header component.
 * The Header component is used to display the header of the app.
 */

import React from 'react';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import ChatIcon from '@mui/icons-material/Chat';

const Header = () => {

    return (
        <AppBar position="static" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'text.primary', fontWeight: 'bold', flex: 1 }}>
                    C.A.S.E.Y.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                    <Button
                        sx={{
                            color: 'text.primary',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            px: 3,
                            mx: 1
                        }}
                        component={RouterLink}
                        to="/news"
                    >
                        <NewspaperIcon />
                        <Typography variant="caption">News</Typography>
                    </Button>
                    <Button
                        sx={{
                            color: 'text.primary',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            px: 3,
                            mx: 1
                        }}

                        component={RouterLink}
                        to="/chat"
                    >
                        <ChatIcon />
                        <Typography variant="caption">Chat</Typography>
                    </Button>
                    <Button
                        sx={{
                            color: 'text.primary',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            px: 3,
                            mx: 1
                        }}
                        component={RouterLink}

                        to="/sports"
                    >
                        <SportsBaseballIcon />
                        <Typography variant="caption">Sports</Typography>
                    </Button>
                </Box>
                <Box sx={{ flex: 1 }} />
            </Toolbar>
        </AppBar>

    );
};

export default Header;
