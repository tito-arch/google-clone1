
import React, {createContext, useContext, useReducer} from 'react';



//preparing the data layer 
export const StateContext = createContext();

 export const StateProvider = ({reducer, initialState, children}) => {
    const newState = useReducer(reducer, initialState);
     //passed two things the reducer and the initial state
     //the children is the app
     //the reducer is the function that listens to the changes in the data layer
     //the initialState is the initial state of the data layer
     //the StateContext.Provider is the data layer
     //the value is the data layer
     return (

        <StateContext.Provider value={newState}>
            {children}
        </StateContext.Provider>
     );
 }


//Hook which allows us to pull information from the data layer
    export const useStateValue = () => useContext(StateContext);