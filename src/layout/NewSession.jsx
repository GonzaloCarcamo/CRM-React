import React from 'react'
import { Outlet } from 'react-router-dom'

const NewSession = () => {
    return(
        <div>
            <h1>Desde el NewSession.jsx</h1>

            <Outlet />
        </div>
        
    )
}

export default NewSession