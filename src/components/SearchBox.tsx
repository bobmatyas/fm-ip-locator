import React from 'react';
import styled from 'styled-components';
import Arrow from '../images/icon-arrow.svg';

const Search = styled.input`
    border: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    font-size: 1.6rem;
    margin: 0 auto;
    padding: 20px 25px;
    width: 325px;

    ::placeholder {
      font-size: 1.6rem;
    }

`;

const IPLabel = styled.label`
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;  /* 2 */
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;            /* 3 */
}
`;

const SearchButton = styled.button`
    background-color: hsl(0, 0%, 17%);
    border: none;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    margin: 0; 
    padding: 20px 25px;
    width: 60px;
`;

const placeholder = `Search for any IP address or domain`

function SearchBox() {
  return (
    <>
    <IPLabel htmlFor="ipSearch">{placeholder}</IPLabel>
    <Search id="ipSearch" placeholder={placeholder}  />
    <SearchButton><img src={Arrow}></img></SearchButton>
    </>
  );
}

export default SearchBox;
