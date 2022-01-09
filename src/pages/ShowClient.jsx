import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './show.css'

const ShowClient = () => {

    const [client, setClient] = useState({})
    const [loading, setLoading] = useState(false)

    const {id} = useParams()

    useEffect(() => {
        setLoading(!loading)

        const getClientAPI = async () => {
            try {
                const url = `http://localhost:4000/clients/${id}`
                const res = await fetch(url)
                const result = await res.json()

                setClient(result)

            } catch (error) {
                console.log(error)
            }

            setLoading(false)
        }

        getClientAPI()
    }, [])

    return(

        Object.keys(client).length === 0 ? <p>There are not results</p> : (
        
            
        
        
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