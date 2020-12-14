import React from 'react';
import styled from 'styled-components';
import IPBoxHeading from './IPBox-Heading';


const IPHolder = styled.div`
    background-color: #fff;
    border-radius: 10px;
    margin: -50px auto 0 auto;
    padding: 20px 25px;
    position: absolute;
    width: 325px;
    z-index: 402;

`;


function IPBox() {
  return (
    <IPHolder>
      <IPBoxHeading heading={"IP Address"} value={"127.0.0.1"} />
      <IPBoxHeading heading={"Location"} value={"Brooklyn, NY 10001"} />
      <IPBoxHeading heading={"Timezone"} value={"UTC-05:00"} />
      <IPBoxHeading heading={"ISP"} value={"SpaceX StarLink"} />
    </IPHolder>
  );
}

export default IPBox;
