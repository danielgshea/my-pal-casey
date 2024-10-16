import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface LeagueProps {
    id: string;
    name: string;
    logo: string;
}

const leagues: LeagueProps[] = [
    { id: 'cfb', name: 'College Football', logo: '/assets/images/logos/NCAA_LOGO.png' },
    { id: 'nfl', name: 'NFL', logo: '/assets/images/logos/nfl.png' },
    { id: 'nba', name: 'NBA', logo: '/assets/images/logos/nba.png' },
    { id: 'wnba', name: 'WNBA', logo: '/assets/images/logos/wnba.png' },
    { id: 'mlb', name: 'MLB', logo: '/assets/images/logos/mlb.png' },
    { id: 'mls', name: 'MLS', logo: '/assets/images/logos/mls.svg' },
];

const LeagueList: React.FC = () => {
    return (
        <Grid container spacing={2} sx={{ mb: 3 }}>
            {leagues.map((league) => (
                <Grid item xs={4} sm={3} md={2} key={league.id}>
                    <Card component={Link} to={`/sports/${league.id}`} sx={{ textDecoration: 'none', height: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                sx={{ height: 140, objectFit: 'contain', p: 2 }}
                                image={league.logo}
                                alt={`${league.name} logo`}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {league.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default LeagueList;
