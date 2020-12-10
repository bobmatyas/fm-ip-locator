import React from 'react';
import styled from 'styled-components';
import IPBoxHeading from './IPBox-Heading';


const IPHolder = styled.div`
    background-color: #fff;
    border-radius: 10px;
    margin: 0 auto;
    padding: 20px 25px;
    width: 325px;
`;


function IPBox() {
  return (
    <IPHolder>
      <IPBoxHeading />
    </IPHolder>
  );
}

export default IPBox;
