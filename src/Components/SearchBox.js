import React from 'react';



const SearchBox = ({searchField, searchChange}) => {
    // again this is just destructuring. {...} allows us to grab the props
    // objects and grab its properties

    

    return (
        <div className='pa1'>
        <input 
        className='pa3 ba b--orange bg-washed-red b'
        type="search" 
        placeholder='Search Robots'
        value={searchField}
        // value: plays the role of setting or returning the the value of the value attirbute of  atext field. 
        // so usally it will be the default value or the value a user types in.
        onChange = {searchChange}

        // onchange event occurs when the value of an element has been changed.
        // so whats happening here is that we are tackong for changes in the value
        // within the SearchBox

        />
        </div>
    )
}

export default SearchBox;