import React from 'react';
import './App.css';
import Header from './components/Header';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';


function App() {

  const position: LatLngTuple = [48.865572, 2.283523];
  const zoom:number = 8;

  return (
    <>
    <Header />
    
    <div>

    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </div>
    </>
  );
}

export default App;
