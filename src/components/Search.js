import React, { useState } from 'react'

function Search(props) {
    const [searchValue, setSearchValue] = useState('')

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    )
}

export default Search