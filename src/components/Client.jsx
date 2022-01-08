import React from 'react'

const Client = ({client}) => {

    const {name, business, email, telephone, notes} = client

    return(
        <tr>
            <td>{name}</td>
            <td>
                <p><span>Email: </span>{email}</p>
                <p><span>Telephone</span>{telephone}</p>
            </td>
            <td>{business}</td>
            <td className='buttons'>
            <button type="button">Show</button>
                <button type="button">Edit</button>
                <button className="delete" type="button">Delete</button>
            </td>
        </tr>
    )
}

export default Client