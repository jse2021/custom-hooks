import React, { useState } from 'react';
import { useEffect } from "react";

// lo primero que voy a hacer es pedir el url que la persona va apedir para llamarlo
export const useFetch = (url) => {
    
    // para tener mayor control de la url
    const[state,setState] = useState({
        data:null,
        isLoading:true,
        hastError:null,
    })

    // manejar la url
    const getFetch = async()    => {

        setState({
            ...state,
            isLoading:true,
        
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading:false,
            hastError:null,
        })
    }

    // cada vez que la url cambie, dispara el useefect
        useEffect(()=>{
            getFetch();
        },[url])


    return {
        data:state.data,
        isLoading:state.isLoading,
        hastError:state.hastError,  
    };
};
 
export default useFetch;