import React from 'react';
import styled from 'styled-components';

const SiteHeader = styled.h1`
  color: #fff;
  font-family: 'Rubik', sans-serif;
  font-size: 2.5rem;
  font-weight: 500;
  margin: 0;
  padding: 35px 0;
  text-align: center;
`;

function Heading() {
  return (
    <SiteHeader>IP Address Tracker</SiteHeader>
  );
}

export default Heading;
