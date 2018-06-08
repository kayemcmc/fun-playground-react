import React from 'react';

const SearchBox = ({searchField, searchChange, placeholder}) => {
    return (
        <div>
            <input 
            type='search'
            placeholder={placeholder}
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;