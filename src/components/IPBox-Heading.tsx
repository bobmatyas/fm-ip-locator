import React from 'react';
import styled from 'styled-components';


const Heading = styled.h2`
    color: hsl(0, 0%, 59%);
    font-size: 1rem;
    font-variant: small-caps;
    font-weight: 400px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;


function IPBoxHeading() {
  return (
    <>
        <Heading>Ip Address</Heading>
    </>
  );
}

export default IPBoxHeading;
