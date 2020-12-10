import React from 'react';
import styled from 'styled-components';


const Heading = styled.h2`
    color: hsl(0, 0%, 59%);
    font-size: 1rem;
    font-variant: small-caps;
    font-weight: 400px;
    letter-spacing: 1px;
    margin-bottom: 0;
    text-align: center;
    text-transform: uppercase;
`;

const Text = styled.p`
    font-size: 1.8rem;
    margin-top: 5px;
    text-align: center;
`;

interface Props {
    heading: string,
    value: string
}

function IPBoxHeading(props:Props) {
  return (
    <>
        <Heading>{props.heading}</Heading>
        <Text>{props.value}</Text>
    </>
  );
}

export default IPBoxHeading;
