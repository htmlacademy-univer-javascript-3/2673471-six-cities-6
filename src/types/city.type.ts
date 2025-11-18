import {CityEnum} from './city.enum.ts';
import {Location} from './location.type.ts';

export type CityType = {
  cityName: CityEnum;
  location: Location;
}
