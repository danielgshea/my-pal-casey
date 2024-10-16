import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';
import { Game } from '../../models/game';
import { useState, useEffect } from 'react';
import { Schedule } from '../../models/schedule';

interface CFBScheduleProps {
    schedule: Schedule | null;
}

const CFBSchedule: React.FC<CFBScheduleProps> = ({ schedule }) => {

    const [games, setGames] = useState<Game[]>(schedule?.games || []);

    useEffect(() => {
        setGames(schedule?.games || []);
    }, [schedule]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    const isCurrentDate = (dateString: string) => {
        const today = new Date();
        const gameDate = new Date(dateString);
        return today.toDateString() === gameDate.toDateString();
    };

    return (
        <TableContainer component={Paper}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ p: 2 }}>
                CFB Schedule
            </Typography>
            <Table aria-label="CFB schedule">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell align="right">Away Team</TableCell>
                        <TableCell align="center">Score</TableCell>
                        <TableCell align="left">Home Team</TableCell>
                        <TableCell>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.length > 0 && games.map((game, index) => (
                        <TableRow
                            key={index}
                            sx={isCurrentDate(game.date) ? {
                                backgroundColor: '#FFD700',
                                border: '2px solid #FFA500'
                            } : {}}
                        >
                            <TableCell>{formatDate(game.date)}</TableCell>
                            <TableCell>{game.time}</TableCell>
                            <TableCell align="right">{game.away_team}</TableCell>
                            <TableCell align="center">
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', mx: 1 }}>
                                        {game.away_score}
                                    </Typography>
                                    <Typography variant="h5" component="span" sx={{ fontWeight: 'bold', mx: 1 }}>
                                        -
                                    </Typography>
                                    <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', mx: 1 }}>
                                        {game.home_score}
                                    </Typography>
                                </Box>
                            </TableCell>
                            <TableCell align="left">{game.home_team}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CFBSchedule;
