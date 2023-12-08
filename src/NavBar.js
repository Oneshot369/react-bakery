import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">
                    Josh's Bakery
                </span>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <span className='nav-item nav-link' href='#'>
                        <Link to='/' className='linkNav'>Main</Link>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className='nav-item nav-link' href='#'>
                        <Link to='/add' className='linkNav'>Add product</Link>
                    </span>
                    </li>
                    <li className="nav-item">
                    <span className='nav-item nav-link' href='#'>
                        <Link to='/login' className='linkNav'>Login</Link>
                    </span>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </nav>

    );
}
export default NavBar
