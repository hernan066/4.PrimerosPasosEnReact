//Atajo rafcp crea un func. compon. con propTypes

import React, { useState } from 'react';
import PropTypes from 'prop-types';



const CounterApp = ({value = 0})=>{
    
    //esto es un hook el useState, se usa como contador
    const [counter, setCounter]= useState(value);

    //Declaramos una funcion la que usaremos en le clic
    //No se puede usar por ej el counter++, hay que incrementarlo asi
    const handleAdd = ()=>{
        setCounter(counter +1);
        // setCounter( (c)=> c+1); esta otra opcion
    }
    
    const handleSust = ()=>{
        setCounter(counter -1);
    }
    
    const handleReset = ()=>{
        setCounter(value);
    }
    
    
    return(
         <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}> +1</button>
            <button onClick={handleReset}> Reset</button>
            <button onClick={handleSust}> -1</button>
        </> 
    );
};
CounterApp.propTypes={
    value: PropTypes.number
};

export default CounterApp;

