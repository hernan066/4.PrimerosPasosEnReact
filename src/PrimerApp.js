//Funcional component
import React from 'react';
//import React, { Fragment } from 'react';

import PropTypes from 'prop-types';// lo importamos para usar PropTypes



//Se desestructura y se llama a saludo y se le asigna un valor por defecto
const PrimeraApp = ({saludo, subtitulo})=>{
    //esta es una manera pero puede generar div inecesarios
    /* return(
    <div>
       <h1>Hola Mundo</h1>
       <p>Mi primera app</p>
    </div>); */
    
    //se puede hacer con fragment pero hace una importacion
    /* return(
        <Fragment>
           <h1>Hola Mundo</h1>
           <p>Mi primera app</p>
        </Fragment>); */
    
    //Esta es la manera mas eficiente
    //Las variables se colocan entre{}
    //No se pueden imprimir booleanos y objetos
    //los arreglos los concatena
    /* const persona = {
        nombre: "Hernan",
        edad: 39
    } */
    //props.saludo no es la manera mas habitual de llamar una prop
    //se usa la destructuracion
    //const saludo = "Hola mundo con const";
    return(
        <>
           <h1>{saludo}</h1>
           {/* <h1>{saludo}</h1> */}
           {/* <pre>{JSON.stringify(persona, null, 3) }</pre> */}
           <p>{subtitulo}</p>
        </>);
}
//Define el tipo de las propiedades 
//.isRequired obliga a que sea ese tipo de dato sea obligatorio
PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired
}
//Si bien la manera mas usada de poner un valor por defecto en un propiedad es = en los atributos 
//Hay otra manera
PrimeraApp.defaultProps ={
    subtitulo:'Soy un subtitulo'
}

export default PrimeraApp;