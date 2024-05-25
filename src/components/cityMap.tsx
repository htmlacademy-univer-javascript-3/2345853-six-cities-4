import {Icon, Marker, layerGroup} from 'leaflet';
import { Offer } from '../types/offer';
import { City } from '../types/city';

import {useRef, useEffect} from 'react';
import useMap from './hooks/useMap';
import { URL_MARKER_DEFAULT } from './constants/all-constants';


type CityMapProp = {
  city: City;
  points: Offer[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function CityMap({city, points}: CityMapProp): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.city.point.latitude,
          lng: point.city.point.longitude,
        });
        marker.setIcon(defaultCustomIcon).addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default CityMap;
