import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './show.css'
import Spinner from '../components/Spinner'

const ShowClient = () => {

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

        loading ? <Spinner/> : Object.keys(client).length === 0 ? <p>There are not results</p> : (
        
        <div className="card">
            {loading ? 'loading...' : (
            <>
                <p><strong>Client Details</strong></p>
                <p>
                    <span>Client:</span>
                    {client.name}
                </p>

            <p>
                <span>Email:</span>
                {client.email}
            </p>

            {client.telephone && (
                <p>
                    <span>Telephone:</span>
                    {client.telephone}
                </p>
            )}

            <p>
                <span>Business:</span>
                {client.business}
            </p>

            {client.notes && (
                <p>
                    <span>Notes:</span>
                    {client.notes}
                </p>
            )}
        </>
        )}
        </div>
        )
    )
}

export default ShowClient