import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Formulario from '../components/Formulario'

const EditClient = () => {

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        

        const getClientAPI = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`
                const res = await fetch(url)
                const result = await res.json()

                setClient(result)

            } catch (error) {
                console.log(error)
            }

            setTimeout(() => {
                setLoading(!loading)
            }, 1000);
            
        }

        getClientAPI()
    }, [])

    return(
        <div class="new">

            {client.name ? (
                <Formulario 
                    client={client}
                    loading={loading}
                />
            ) : <p>ID not valid</p>}

        </div>
        
    )
}

export default EditClient