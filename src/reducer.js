export const initialState = {
    term: '',
};
//this is where the data layer is created it is the search term eg "bunnieabc.com" which is initially null

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//dispatch term as inputed by user
//action type

//REDUCER
//listens to any action that is dispatched
const reducer = (state=initialState, action ) => {
    //the state is the initial state of the data layer
    //the action is the action that is dispatched (into the context)

    //log out the action we dispatch.
    console.log (action);

    //listen to all the actions that are dispatched


    switch(action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,            //return whatever the current state is (spread operator)
                term: action.term,   //change term in the data layer to the term that is dispatched
            };                       
            default:
                return state;        //if it fails return the current state

    }
};

export default reducer;
