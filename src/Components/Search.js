    import React, { useState } from 'react';
    import './search.css'
    import MicIcon from '@material-ui/icons/Mic';
    import SearchIcon from '@material-ui/icons/Search';
    import Button from '@material-ui/core/Button';
    import {useNavigate} from 'react-router-dom';
    import {useStateValue} from '../StateProvider'
    import actionTypes from '../reducer';

    function Search({hideButtons = false}) {
        
        const { dispatch} = useStateValue()
        const [input, setInput] = useState('');

        const navigate = useNavigate();

        
        
        const searchPage = (e) => {
            e.preventDefault();

            console.log('You hit the search button >>');

            dispatch ({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            })
            //do something with input.....come back to this
            
            navigate('/search');
        }
    return (
        <form className='search'>
        <div className='search__input'>
         
         <SearchIcon  className="search__inputIcon"/>
         <input 
           value={input} onChange={e => setInput(e.target.value)} 
        />
         <MicIcon />

        </div> 
      
      {!hideButtons &&(
      
      <div className='search__buttons'>
            <Button type='submit' onClick={searchPage} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
        
      
        
        )}
        
      
        </form>
    )
    }

    export default Search
