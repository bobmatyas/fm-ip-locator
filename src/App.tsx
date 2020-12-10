import React from 'react';
import './App.css';
import Header from './components/Header';
import IPBox from './components/IPBox';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
`;

function App() {

  const position: LatLngTuple = [48.865572, 2.283523];
  const zoom:number = 17;

  return (
    <Wrapper>
  
    <Header />
    
    <IPBox />
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
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
  </Wrapper>
  );
}

export default App;
