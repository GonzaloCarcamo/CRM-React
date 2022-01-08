import {Outlet, Link } from 'react-router-dom'
import './layout.css'

const Layout = () => {
    return(
        <div className='layout'>
            <div className='menu'>
                <div className='title'>
                    <h2>CRM with</h2>
                    <img src="https://coollogo.net/wp-content/uploads/2021/03/React-logo.svg" />    
                </div>

                <nav className='nav'>
                    <Link to="/clients">Clients</Link>
                    <Link to="/clients/new">New Client</Link>
                </nav>
            </div>

            <div className='content'>
                <Outlet/>
            </div>
            
        </div>
        
        
    )
}

export default Layout