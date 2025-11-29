import {MutableRefObject, useEffect, useRef, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CityEnum} from '../types/city.enum.ts';
import {CITIES} from '../types/location.type.ts';

const TILE_LAYER = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityEnum
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {lat: CITIES[city].latitude, lng: CITIES[city].longitude},
        zoom: 10,
      });
      const layer = new TileLayer(TILE_LAYER,
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );
      instance.addLayer(layer);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => {
    if (map && isRenderedRef.current) {
      map.setView({
        lat: CITIES[city].latitude,
        lng: CITIES[city].longitude
      }, CITIES[city].zoom);
    }
  }, [city, map]);

  return map;
}
