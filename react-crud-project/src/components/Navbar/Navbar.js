import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/employees">Employees</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
