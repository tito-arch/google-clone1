import React from 'react';
import './search.css'
import {useLocation} from 'react-router-dom';
import {useStateValue} from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
    const location = useLocation();
    const {state} = useStateValue();
    const {data} = useGoogleSearch(state.term);
    console.log(data);


    return (
        <div>
            <p> From reducer - {state.term}</p>
            <p> From location - {location.state.term}</p>
            
           
        </div>
    )
}

export default SearchPage
