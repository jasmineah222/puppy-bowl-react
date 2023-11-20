import axios from 'axios'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function AddPuppyForm() {

    const [ name, setName ] = useState('')
    const [ breed, setBreed ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ imageUrl, setImageUrl ] = useState('')

    const [ successMsg, setSuccessMsg] = useState('')

    const navigate = useNavigate()

    // const statusMsg = (status === 'field' || status === 'bench' ? '' : 'Status must be either "Bench" or "Field')

    async function handleSubmit(evt) {
        evt.preventDefault()
        let API = 'https://fsa-puppy-bowl.herokuapp.com/api/2309-FTB-ET-WEB-FT/players'


        try {

            // await fetch (url, {
            //     method: "POST",
            //     headers: {'Content-Type':'application/json'},
            //     body: JSON.stringify({})
            // })

            const { data: json} = await axios.post(`${API}`,{
                name, breed, status, imageUrl
            })

            if (json.success) {
                setSuccessMsg('Successfully added!')
            } else {
                setSuccessMsg('Oh no! Error adding!')
            }
            navigate('/') // redirect home after adding puppy
            
        } catch(err) {
            console.error(err.message)
        }
    }

    return <div>
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input value={name} onChange={(evt) => setName(evt.target.value)}/>
        </label>
        <label>
            Breed:
            <input value={breed} onChange={(evt) => setBreed(evt.target.value)}/>
        </label>
        <label>
            Status:
            
            {/* <input value={status} onChange={(evt) => setStatus(evt.target.value)}/>
            {statusMsg} */}

            <select onChange={(evt) => setStatus(evt.target.value)}> 
                <option value='bench'>Bench</option>
                <option value='field'>Field</option>
            </select>
        </label>
        <label>
            ImageUrl:
            <input value={imageUrl} onChange={(evt) => setImageUrl(evt.target.value)}/>
        </label>

        <button type='submit'>Add New Puppy</button>
    </form>
    {successMsg}

    </div>
}

export default AddPuppyForm