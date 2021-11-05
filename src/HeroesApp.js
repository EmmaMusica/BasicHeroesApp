import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'


//revisa el localstorage a ver si tenemos un ubjeto user con datos del usuario (si esta o no autenticado)
const init = () =>{
    return JSON.parse(localStorage.getItem('user')) || {logged:false}
}


export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer(authReducer, {}, init) //el init le pasa el inicialState
 
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }} >
            <AppRouter />
        </AuthContext.Provider>
    )
}
