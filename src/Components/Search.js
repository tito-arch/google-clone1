    import React, { useState } from 'react';
    import './search.css'
    import MicIcon from '@material-ui/icons/Mic';
    import SearchIcon from '@material-ui/icons/Search';
    import Button from '@material-ui/core/Button';
    import {useNavigate} from 'react-router-dom';
    import {useStateValue} from '../StateProvider'

    function Search({hideButtons = false}) {
        const navigate = useNavigate();
        const {state, dispatch} = useStateValue()

        const handleChange = (e) => {
            dispatch({type: 'SET_SEARCH_TERM', term: e.target.value})
        }
        
        const searchPage = () => {
            console.log('You hit the search button >>', state.term);

            //do something with input.....come back to this
            
            navigate('/search', {state: state});
        }
    return (
        <form className='search'>
        <div className='search__input'>
         
         <SearchIcon  className="search__inputIcon"/>
         <input 
            value={state.term} 
            onChange={handleChange}
            onKeyDown={e => {
                if(e.key === 'Enter'){
                    searchPage()
                }
            }}    
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
