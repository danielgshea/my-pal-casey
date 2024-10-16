import { fetchTrendingNews } from './news';
import { fetchTrendingSports, fetchSportsSchedule, fetchScrapedSportsSchedule } from './sports';

export const api = {
    news: {
        fetchTrendingNews,
    },
    sports: {
        fetchTrendingSports,
        fetchSportsSchedule,
        fetchScrapedSportsSchedule,
    },
};
