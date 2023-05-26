import React, { useState } from 'react';

const useForm = (initialForm = {}) => {

    const [formState,setFormState] = useState(initialForm);

    
    // funcion que permite hacer el cambio en cualquier input
    const onInputChange = ({target}) =>{
        const{name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    const onResetForm = ()=>{
        
        setFormState(initialForm)
    }

    return{
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
};

export default useForm;