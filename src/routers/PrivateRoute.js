import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest //esto representa al resto de las propiedades que queremos pasarle a la ruta, el exact, el path, etc..
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)
    
    return (
        <Route 
            {...rest}
            component={ (props) =>(
                (isAuthenticated)  
                    ? <Component {...props} />
                    : <Redirect to="/login" />
                )
            }
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
