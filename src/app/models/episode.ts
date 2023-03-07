import { Character } from './character';

// Implementaremos una interface para mapear la informacion de los Capitulos
export interface Episode {
    id: number;
    name: string;
    airDate: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }