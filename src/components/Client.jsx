import { useNavigate } from "react-router-dom"

const Client = ({client, handleDelete}) => {

    const navigate = useNavigate()

    const {name, business, email, telephone, notes, id} = client

    return(
        <tr>
            <td>{name}</td>
            <td>
                <p><span>Email: </span>{email}</p>
                <p><span>Telephone</span>{telephone}</p>
            </td>
            <td>{business}</td>
            <td className='buttons'>
                <button 
                    type="button"
                    onClick={() => navigate(`/clients/${id}`)}
                
                >Show</button>
                
                <button 
                    type="button"
                    onClick={() => navigate(`/clients/edit/${id}`)}
                >Edit</button>
                
                <button 
                    className="delete" 
                    type="button"
                    onClick={() => handleDelete(id)}
                >Delete</button>
            </td>
        </tr>
    )
}

export default Client