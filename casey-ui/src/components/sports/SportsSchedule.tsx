import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Game } from '../../models/game';
import { useState, useEffect } from 'react';
import { Schedule } from '../../models/schedule';

interface SportsScheduleProps {
    league: string;
    schedule: Schedule | null;
}

const SportsSchedule: React.FC<SportsScheduleProps> = ({ league, schedule }) => {

    const [games, setGames] = useState<Game[]>(schedule?.games || []);

    useEffect(() => {
        setGames(schedule?.games || []);
    }, [schedule]);

    return (
        <TableContainer component={Paper}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ p: 2 }}>
                {league} Schedule
            </Typography>
            <Table aria-label={`${league} schedule`}>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Home Team</TableCell>
                        <TableCell>Away Team</TableCell>
                        <TableCell>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {games.length > 0 && games.map((game, index) => (
                        <TableRow key={index}>
                            <TableCell>{game.date}</TableCell>
                            <TableCell>{game.time}</TableCell>
                            <TableCell>{game.home_team}</TableCell>
                            <TableCell>{game.away_team}</TableCell>
                            <TableCell>{game.home}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SportsSchedule;
