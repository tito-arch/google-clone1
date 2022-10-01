import React from 'react';
import './search.css'
import {useLocation} from 'react-router-dom';
import {useStateValue} from '../StateProvider'

function SearchPage() {
    const location = useLocation();
    const {state} = useStateValue()

    return (
        <div>
            <p> From reducer - {state.term}</p>
            <p>From navigate - {location.state.term}</p>
        </div>
    )
}

export default SearchPage
