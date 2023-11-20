import { useEffect, useState } from 'react'
import Axios from 'axios'

import { useNavigate } from 'react-router-dom'

function AllPuppies() {

    const [ puppies, setPuppies ] =useState([])

    const navigate = useNavigate()

    useEffect(() => {
        //Runs the fetchPuppies function after the page loads.
        fetchPuppies()

        // only runs once because of sceond argument
    },[])



    async function fetchPuppies() {
        //grab puppies from API

        let API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players'

        try {
            const { data: response } = await Axios.get(`${API}`)
        
            /* *****W/O axios installation*****
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players')
            const json = await response.json()
            
            setPuppies(json.data.players) 
            */
            
            // response.data.players (the data I actually want)
    
            // console.log('response', response)
            // console.log('players', response.data.players)
    
            setPuppies(response.data.players)
        } 
        catch (err) {
            console.error(err.message)
        }
       
    }

    console.log(puppies)

    async function removePuppy(id) {
        let API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players'

        try{
            await Axios.delete(`${API}/${id}`)
            //after deleting , update page with/out manually refreshing page
            fetchPuppies()
        }
        catch (err) {console.error(err.message)}
    }

    return <ul className='puppies-container'>
    {
        puppies.length ? 
            puppies.map(puppy => {
                return <li key={puppy.id}>
                    <h3>{puppy.name}</h3>
                    <img src={puppy.imageUrl} />
                    <button onClick={() => navigate(`/details/${puppy.id}`)}>Show Details</button>
                    <button className='deleteBtn' onClick={() => removePuppy(puppy.id)}>Delete</button>
                </li>
            })
            :
            <h2>No Puppies Here! 😮 </h2>
    }

    </ul>
}

export default AllPuppies