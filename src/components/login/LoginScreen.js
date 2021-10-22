import React from 'react'

export const LoginScreen = ({history}) => { //history es una props que trae por los routers

    const handleLogin = () => {
        // history.push('/'); // redirecciona hacia '/'
        history.replace('/'); //reemplaza la direccion actual por '/', por lo que no se puede volver atras.
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
