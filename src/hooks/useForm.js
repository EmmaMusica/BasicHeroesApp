import { useState } from "react"

export const useForm = ( initialState = {}) => {
    
    const [values, setValues] = useState(initialState)

    const reset = (reset) => {
        setValues(reset)
    }

    const handleInputChange = ({ target }) =>{

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [ values, handleInputChange, reset ];

}