import React from 'react';
import Heading from './Heading'
import SearchBox from './SearchBox';
import Background from '../images/pattern-bg.png';
import styled from 'styled-components';

const SiteHeader = styled.header`
    background-image: url(${Background});
    background-size: cover;
    margin: 0;
    padding: 0;
    text-align: center;
`;


function Header() {

  return (
    <SiteHeader>
        <Heading />

        <SearchBox />

    </SiteHeader>
  );
}

export default Header;
