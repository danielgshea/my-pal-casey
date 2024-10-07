import { Player } from './player';

export interface Team {
    name: string;
    city: string;
    conference: string;
    division: string;
    players: Player[];
}