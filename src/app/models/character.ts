import { Episode } from './episode';
import { Location } from './location';

// Implementaremos una interface para mapear la informacion de los personajes
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Episode[];
  url: string;
  created: string;
}

