import React from 'react';
import styled from 'styled-components';


const Search = styled.input`
    border: none;
    border-radius: 10px;
    font-size: 1.6rem;
    margin: 0 auto;
    padding: 20px 25px;
    width: 325px;

    :placeholder {
      font-size: 1.6rem;
    }

    `;

const placeholder = `Search for any IP address or domain`

function SearchBox() {
  return (
    <Search placeholder={placeholder} />
  );
}

export default SearchBox;
