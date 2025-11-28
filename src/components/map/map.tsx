import {useEffect, useRef} from 'react';
import {layerGroup, Marker} from 'leaflet';
import leaflet from 'leaflet';
import useMap from '../../hooks/use-map.tsx';
import {OfferType} from '../../types/offer.type.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {CityEnum} from '../../types/city.enum.ts';

type MapProps = {
  city: CityEnum;
  offers: OfferType[];
  selectedOfferId: OfferType['id'] | null;
  block?: string;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({city, offers, selectedOfferId, block}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            selectedOfferId && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city, map, offers, selectedOfferId]);
  return (
    <section
      className={`${block}__map map`}
      ref={mapRef}
    />
  );
}
