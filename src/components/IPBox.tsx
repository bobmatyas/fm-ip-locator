import React from 'react';
import styled from 'styled-components';
import IPBoxHeading from './IPBox-Heading';


const AbosoluteContainer = styled.div`
    margin: -50px auto 0 auto;
    position: absolute;
    width: 100%;
    z-index: 402;
`;

const IPHolder = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
    margin: 0 auto;
    padding: 20px 25px;
    max-width: 385px;

  @media (min-width: 900px) {
    align-items: flex-start;
    display: flex;
    justify-content: space-around;
    max-width: 1100px;
    padding: 40px 30px;
  }
`;


function IPBox() {
  return (
    <AbosoluteContainer>
    <IPHolder>
      <IPBoxHeading heading={"IP Address"} value={"127.0.0.1"} />
      <IPBoxHeading heading={"Location"} value={"Brooklyn, NY 10001"} />
      <IPBoxHeading heading={"Timezone"} value={"UTC-05:00"} />
      <IPBoxHeading heading={"ISP"} value={"SpaceX StarLink"} />
    </IPHolder>
    </AbosoluteContainer>
  );
}

export default IPBox;
