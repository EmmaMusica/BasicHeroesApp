import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext);

    const history = useHistory(); /* Utilizamos useHistory de react-router-dom, en lugar de tener que
    enviar la props "history" entre componentes. 
    LA INTENCION ES QUE NUESTROS COMPONENTES SEAN LO MÁS AUTOSUFICIENTES POSIBLES*/

    const handleLogout = ()=> {
        dispatch({
            type: types.logout
        })
        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5 pe-5">
            
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Asociaciones
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>
                    </div>
                </div>

                <div className=" navbar-nav ">
                   
                        
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Search
                        </NavLink>
                   
                </div>

                <div className="navbar-nav d-flex align-items-center">
                    
                        <button
                            className="btn nav-item nav-link"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <p className="nav-item mb-0 text-info p-2">
                            {user.name}
                        </p>

                   
                </div>
            
        </nav>
    )
}
