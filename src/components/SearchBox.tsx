import React from 'react';
import Heading from './Heading'
import Background from '../images/pattern-bg.png';
import styled from 'styled-components';


const Search = styled.input`
    margin: 0 auto;
    padding: 20px 25px;
    border: none;
    border-radius: 10px; 
`;

const placeholder = `127.0.0.1`

function SearchBox() {
  return (
    <Search placeholder={placeholder} />
  );
}

export default SearchBox;
