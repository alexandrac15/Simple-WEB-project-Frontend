import {Color} from './Color';

export class Dog {

  idDog: number;
  name: string;
  color: Color;
  breed: string;
  playful: boolean;
}
// Tips: fieldurile clasei trebuie sa corespunda in denumire cu fieldurile din backend.
// Am observat ca in cazul valorilor bool, daca apare in backend : isPlayful,  in JSON apare doar playful.
// De aceea apare playful aici in loc de isPlayful.
