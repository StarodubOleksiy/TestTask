import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  heroes : Hero[] = [];
  createDb() { //comments
    const heroes = [
      { id: 11, name: 'Mr. Nice', numberOfComments:0,comments:[] },
      { id: 12, name: 'Narco', numberOfComments:0,comments:[] },
      { id: 13, name: 'Bombasto', numberOfComments:0,comments:[] },
      { id: 14, name: 'Celeritas', numberOfComments:0,comments:[] },
      { id: 15, name: 'Magneta', numberOfComments:0,comments:[] },
      { id: 16, name: 'RubberMan', numberOfComments:0,comments:[] },
      { id: 17, name: 'Dynama', numberOfComments:0,comments:[] },
      { id: 18, name: 'Dr IQ', numberOfComments:0,comments:[] },
      { id: 19, name: 'Magma', numberOfComments:0,comments:[] },
      { id: 20, name: 'Tornado', numberOfComments:0,comments:[] }
    ];
    return {heroes};
  }
}
