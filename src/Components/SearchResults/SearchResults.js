import React from 'react';

const  SearchResults = (props) => {
    return ( 
    <div>
        <h1>SearchResults are : </h1>
        <h3>{props.results}</h3>
    </div>    
        )
} 

export default SearchResults ;