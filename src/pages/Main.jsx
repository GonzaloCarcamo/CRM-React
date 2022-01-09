import { useState, useEffect } from 'react'
import Client from '../components/Client'

const Main = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {
        const getClientsAPI = async () => {
            try {
                const url = 'http://localhost:4000/clients'
                const res = await fetch(url)
                const result = await res.json()

                setClients(result)

            } catch (error) {
                console.log(error)
            }
        }

        getClientsAPI()

    }, [])

    const handleDelete = async id => {
        const confirmar = confirm('Are you sure?')

        console.log(confirm)

        if(confirmar){
            try {
                const url = `http://localhost:4000/clients/${id}`

                const res = await fetch(url, {
                    method: 'DELETE'
                })
                
                await res.json()

                const arrayClients = clients.filter(client => client.id !== id)

                setClients(arrayClients)

            } catch (error) {
                console.log(error)
            }
        }
    }

    return(
        <div>
            <h2>Clients</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Business</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {clients.map(client => (
                        <Client
                            key={client.id}
                            client={client}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
        
    )
}

export default Main