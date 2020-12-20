import React, { useState, useEffect } from 'react';
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

    @media(min-width: 900px) {
      width: 500px;
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

  const [search, setSearch] = useState('');
  const [placeHolder, setPlaceholder] = useState('Search for any IP Address or Domain');
  const [data, setData] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_IP;

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!event.target.elements.ipSearch.value) { return } 
    let searchValue:string = event.target.elements.ipSearch.value;
    let ipValueToSearch:string = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${searchValue}`
    setPlaceholder(searchValue);
    setSearch(ipValueToSearch);    
  }

  useEffect(() => {
    setLoading(true);
    fetch(search)
      .then(data => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
    }, [search, API_KEY]);



  return (
    <form onSubmit={handleSubmit}>
    <IPLabel htmlFor="ipSearch">{placeHolder}</IPLabel>
    <Search id="ipSearch" placeholder={placeHolder} />
    <SearchButton><img src={Arrow} alt="Search"></img></SearchButton>
    </form>
  );
}

export default SearchBox;
