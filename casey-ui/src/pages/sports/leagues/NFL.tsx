import React, { useEffect } from 'react';
import { api } from '../../../services/api';
import { useState } from 'react';
import { Schedule } from '../../../models/schedule';
import NFLSchedule from '../../../components/sports/NFLSchedule';

const NFL = () => {

    const [schedule, setSchedule] = useState<Schedule | null>(null);

    const getSchedule = async () => {
        const schedule = await api.sports.fetchSportsSchedule('nfl');
        console.log(schedule);
        setSchedule(schedule);
    }

    const getScrapedSchedule = async () => {
        const schedule = await api.sports.fetchScrapedSportsSchedule('nfl');
        console.log(schedule);
        setSchedule(schedule);
    }

    useEffect(() => {
        getScrapedSchedule();
    }, []);

    return (
        <NFLSchedule schedule={schedule} />
    )
}

export default NFL;