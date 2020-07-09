import { Photo } from './Photo';

export interface User {
  id: number;
  name: string;
  knownAs: string;
  age: number;
  gender: string;
  created: Date;
  lastactive: Date;
  photoUrl: string;
  city: string;
  country: string;
  interests?: string;
  introduction?: string;
  lookingfor?: string;
  photos?: Photo[];
}
