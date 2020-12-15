import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  @media (min-width: 900px) {
    border-left: 1px solid #d8d8d8;
    margin: 0 auto;
    padding-left: 30px;

    :first-of-type {
      border: none;
      padding-left: 0;
    }
    
  }
`;

const Heading = styled.h2`
    color: hsl(0, 0%, 59%);
    font-size: 1rem;
    font-variant: small-caps;
    font-weight: 400px;
    letter-spacing: 1px;
    margin-bottom: 0;
    text-align: center;
    text-transform: uppercase;

    @media (min-width: 900px) {
      text-align: left;
    }
`;

const Text = styled.p`
    font-size: 1.8rem;
    margin-top: 5px;
    text-align: center;

    @media(min-width: 900px) {
      font-size: 2.4rem;
      text-align: left;    
    }
`;

interface Props {
    heading: string,
    value: string
}

function IPBoxHeading(props:Props) {
  return (
    <Container>
        <Heading>{props.heading}</Heading>
        <Text>{props.value}</Text>
    </Container>
  );
}

export default IPBoxHeading;
