import { Team } from './team';

export interface Game {
    date: string;
    away_team: string;
    home_team: string;
    week?: string;
    time?: string;
    away?: string;
    home?: string;
    away_score?: string;
    home_score?: string;
    qtr?: string;
    clock?: string;
    situation?: string;
    pos?: string;
    score?: string;
    total_points?: string;
    ou?: string;
    odds?: string;
    broadcast?: string;
}