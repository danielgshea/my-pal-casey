import { fetchTrendingNews } from './news';
import { fetchTrendingSports, fetchSportsSchedule } from './sports';

export const api = {
    news: {
        fetchTrendingNews,
    },
    sports: {
        fetchTrendingSports,
        fetchSportsSchedule,
    },
};
