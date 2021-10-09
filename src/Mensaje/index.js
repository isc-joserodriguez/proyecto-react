import React from 'react';
import './index.css';

const Mensaje = (props) => (
    <div>
        <h1 className="clase">{props.atributo}</h1>
        <h2 className="clase">{props.atributo}</h2>
        <h3 className="clase">{props.atributo}</h3>
        <h4 className="clase">{props.atributo}</h4>
        <h5 className="clase">{props.atributo}</h5>
        <h6 className="clase">{props.atributo}</h6>
    </div>
)

export default Mensaje;