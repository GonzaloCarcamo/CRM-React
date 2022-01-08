import {Outlet, Link } from 'react-router-dom'
import './layout.css'

const Layout = () => {
    return(
        <div className='layout'>
            <div className='menu'>
                <h2>CRM with React</h2>

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