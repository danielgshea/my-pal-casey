import { fetchNews } from './news';
import { fetchSports } from './sports';

export const api = {
    news: {
        fetch: fetchNews,
    },
    sports: {
        fetch: fetchSports,
    },
};
