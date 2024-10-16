import { Team } from './team';

export interface Game {
    date: string;
    away_team: string;
    home_team: string;
    conference?: string;
    week?: string;
    time?: string;
    away_score?: string;
    home_score?: string;
    qtr?: string;
    clock?: string;
    situation?: string;
    pos?: string;
}