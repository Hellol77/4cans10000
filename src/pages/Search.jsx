import React from 'react';
import BeerList from '../components/beerList/beerList';
import FilterBox from './../components/filterBox/filterBox';

const Search = (props) => {
    return (
        <div>
            <BeerList />
            <FilterBox />
            <BeerList />
        </div>
    );
};
export default Search;