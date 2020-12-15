import React from 'react';
import './App.css';
import Header from './components/Header';
import IPBox from './components/IPBox';
import styled from 'styled-components';
import MapHolder from './components/MapHolder'

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
`;



function App() {

  return (
    <Wrapper>
  
    <Header />
    
    <IPBox />

    <MapHolder 
      position={[37.40599, -122.078514]}
    />

  </Wrapper>
  );
}

export default App;
