import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, CircularProgress, Grid, Paper } from '@mui/material';
import { api } from '../services/api';

interface Game {
    home_team: string;
    away_team: string;
    start_time: string;
    venue: string;
}

const SportsSchedule: React.FC = () => {
    const { league } = useParams<{ league: string }>();
    const [schedule, setSchedule] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.sports.fetchSportsSchedule(league as any).then(setSchedule).catch(console.error).finally(() => setLoading(false));
    }, [league]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                {league?.toUpperCase()} Schedule
            </Typography>
            <Grid container spacing={3}>
                {schedule.length > 0 ? schedule.map((game, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            <Typography variant="h6">{game.home_team} vs {game.away_team}</Typography>
                            <Typography>Time: {new Date(game.start_time).toLocaleString()}</Typography>
                            <Typography>Venue: {game.venue}</Typography>
                        </Paper>
                    </Grid>
                )) : <Typography>Couldn't find any games for today</Typography>}
            </Grid>
        </Box>
    );
};

export default SportsSchedule;
