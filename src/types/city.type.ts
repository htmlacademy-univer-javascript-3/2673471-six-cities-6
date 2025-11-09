import {CityEnum} from './city.enum.ts';
import {Location} from './location.type.ts';

export type City = {
  cityName: CityEnum;
  location: Location;
}
