import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => { //history es una props que trae por los routers

    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        // history.push('/'); // redirecciona hacia '/'
        // history.replace('/'); //reemplaza la direccion actual por '/', por lo que no se puede volver atras.
        
        const path = localStorage.getItem('lastPath') || '/';
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Emmanuel'
            }
        })
        history.replace(path);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }    
            >
                Login
            </button>
        </div>
    )
}
