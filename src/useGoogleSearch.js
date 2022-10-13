import {useState, useEffect} from 'react'

const CONTEXT_KEY = process.env.REACT_APP_GOOGLE_CONTEXT_KEY
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY


function useGoogleSearch() {

    const [data, setData] = useState(null)

    useEffect(() => {

        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${this.state.term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData()

  
},  [this.state.term])

    return {data}
}

export default useGoogleSearch

