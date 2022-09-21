import React from 'react'
import './SearchBar.css' ;
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div className="d-flex nav__search mx-auto" role="search">
            <input className="nav__searchBar" type="search" />
            <SearchIcon className="nav__searchIcon"/>
    </div>
  )
}

export default SearchBar