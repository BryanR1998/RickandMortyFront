import { Character } from './character';

// Implementaremos una interface para mapear la informacion de los personajes de los lugares
export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents?: Character[];
}