import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchItems } from '../features/columns/columnsSlice';
import { SearchForm, SearchInput, SearchInputButton, SearchLabel } from './StyledComponents';

const SearchSection = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    //handle search is called when the form is submitted so when the search icon is clicked or enter key is pressed
    const handleSearch = (e) => {
        //preventDefault is called to handle the reload after the submit
        e.preventDefault();

        if(searchInput === '') return;

        dispatch(searchItems(searchInput));
        setSearchInput('');
    }

    return (
        <SearchForm onSubmit={handleSearch}>
            <SearchLabel>Search an item</SearchLabel>
            <SearchInput value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} placeholder="search" />
            <SearchInputButton type="submit"> <i className="fa fa-search"></i> </SearchInputButton>
        </SearchForm>
    )
}

export default SearchSection;