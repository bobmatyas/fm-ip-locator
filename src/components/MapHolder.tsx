import React from 'react';
import { MapContainer, TileLayer, Popup, Marker} from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import L from 'leaflet';
import IconLocation from '../images/icon-location.svg';

const pointerIcon = new L.Icon({
    iconUrl: IconLocation,
    iconRetinaUrl: IconLocation,
  });

interface Props {
    position: LatLngTuple,
}

function MapHolder(props:Props) {

    const zoom:number = 17;

  return (
    <MapContainer center={props.position} zoom={zoom} scrollWheelZoom={false} zoomControl={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={props.position} icon={pointerIcon}>
    </Marker>
  </MapContainer>
  );
}

export default MapHolder;
