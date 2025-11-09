import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.tsx';
import {layerGroup, Marker} from 'leaflet';
import leaflet from 'leaflet';
import {Offer} from '../../types/offer.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {City} from '../../types/city.type.ts';

type MapProps = {
  className?: string;
  city: City;
  offers: Offer[];
  selectedOfferId: Offer['id'] | null;
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

export default function Map({city, offers, selectedOfferId, className}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
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
  }, [map, offers, selectedOfferId]);
  return (
    <section
      className={className}
      ref={mapRef}
      style={{height: '500px'}}
    />
  );
}
