import React from 'react';//imr
import ReactDOM from 'react-dom';//imrd
//import PrimeraApp from './PrimerApp';
import CounterApp from './CounterApp';

import './index.css';




const divRoot = document.querySelector('#root');

//saludo seria una propiedad del componente
//ReactDOM.render( <PrimeraApp saludo = "Hola mundo" />,divRoot);
ReactDOM.render(<CounterApp value = {0} />, divRoot)
