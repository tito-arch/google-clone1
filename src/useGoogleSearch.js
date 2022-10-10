import {useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = "b9c7c2b1b5b1c2c5a"

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

