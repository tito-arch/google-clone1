import {useState, useEffect} from 'react'
import { useStateValue } from './StateProvider'
import axios from 'axios'

const CONTEXT_KEY = process.env.REACT_APP_GOOGLE_CONTEXT_KEY
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const BASE_URL = "https://customsearch.googleapis.com/customsearch/v1";


function useGoogleSearch() {
    const {state} = useStateValue()
    const [data, setData] = useState(null)

    // use axios to search google 
    const searchGoogle = async (term) => {
        const {data} = await axios.get(BASE_URL, {
            params: {
                key: API_KEY,
                cx: CONTEXT_KEY,
                q: term,
            }
        })

        return data 
    }

    useEffect(() => {
        if(state.term) {
            searchGoogle(state.term)
            .then((data) => {
                setData(data)
            }).catch((err) => {
                console.log(err)
            }
            )
        }
},  [state.term])

    return {data}
}

export default useGoogleSearch

