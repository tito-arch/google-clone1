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
            {/*<p> From reducer - {state.term}</p>*/}
             <h1>{location.state.term}</h1>
        </div>
    )
}

export default SearchPage
