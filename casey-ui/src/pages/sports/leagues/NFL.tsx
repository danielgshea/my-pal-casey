import React, { useEffect } from 'react';
import { api } from '../../../services/api';
import SportsSchedule from '../../../components/sports/SportsSchedule';
import { Game } from '../../../models/game';
import { useState } from 'react';
import { Schedule } from '../../../models/schedule';

const NFL = () => {

    const [schedule, setSchedule] = useState<Schedule | null>(null);

    const getSchedule = async () => {
        const schedule = await api.sports.fetchSportsSchedule('nfl');
        console.log(schedule);
        setSchedule(schedule);
    }

    useEffect(() => {
        getSchedule();
    }, []);

    return (
        <SportsSchedule league="NFL" schedule={schedule} />
    )
}

export default NFL;