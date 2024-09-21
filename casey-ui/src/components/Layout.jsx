/**
 * Layout.jsx
 * 
 * This file contains the Layout component.
 * The Layout component is used to wrap the app and provide a consistent layout.
 */

import React from 'react';
import { Container, Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            <Container component="main" sx={{ flexGrow: 1, mt: 4, mb: 4 }}>
                <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                    <Link component={RouterLink} to="/">
                        Home
                    </Link>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return last ? (
                            <Typography color="text.primary" key={to}>
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Typography>
                        ) : (
                            <Link component={RouterLink} to={to} key={to}>
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
                {children}
            </Container>

            <Footer />
        </Box>
    );
};

export default Layout;
