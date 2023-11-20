import axios from "axios"
import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

function SinglePuppy() {

    const [ puppy, setPuppy ] = useState({})

    const { id } = useParams()

    useEffect(() => {
        fetchSinglePuppy()
    }, [])

    async function fetchSinglePuppy() {
        let API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players'

        try {
            const { data: json } = await axios.get(`${API}/${id}`)

            setPuppy(json.data.player)
            } catch(err) {
            console.error(err.message)
        }
    }

        // console.log(Object.keys(puppy)) // shows object properties 

    return <div className='details'>
        {
            puppy.id ?
            <div className="single-pup">
                <h2>{puppy.name}</h2>
                <h3># {puppy.id}</h3>
                <h2>Breed: {puppy.breed}</h2>
                <h2>Status: {puppy.status}</h2>
                <img src={puppy.imageUrl}/>
            </div>
            :
            <h1>The puppy with id:"{id}" was not found. Try again.</h1>
        }
    </div>
}

export default SinglePuppy