import React, { useEffect } from 'react';
import { api } from '../../../services/api';
import { useState } from 'react';
import { Schedule } from '../../../models/schedule';
import CFBSchedule from '../../../components/sports/CFBSchedule';
import { Game } from '../../../models/game';
const CFB = () => {

    const [schedule, setSchedule] = useState<Schedule | null>(null);

    const getSchedule = async () => {
        const response = await api.sports.fetchSportsSchedule('cfb');
        const schedule: Schedule = {
            games: []
        };
        for (const game of response) {
            if (game.home_division !== 'fbs' ||
                game.away_division !== 'fbs' ||
                game.home_pregame_elo < 1500 ||
                game.away_pregame_elo < 1500) {
                continue;
            }
            const newGame: Game = {
                date: game.start_date,
                away_team: game.away_team,
                home_team: game.home_team,
                conference: game.home_conference,
                week: game.week,
                away_score: game.away_points,
                home_score: game.home_points,
                situation: game.completed,
            };
            schedule.games.push(newGame);
        }

        setSchedule(schedule);
    }

    useEffect(() => {
        getSchedule();
    }, []);

    return (
        <CFBSchedule schedule={schedule} />
    )
}

export default CFB;