import React from 'react';
import './search.css'
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {
    const {data} = useGoogleSearch()

    return (
        <div>
            <h1>Search results</h1>

            <ul>
                {data?.items.map(item => (
                    <li key={item.link}>
                        <a href={item.link}>{item.displayLink}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchPage
