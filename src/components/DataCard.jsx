import React from 'react'
import propTypes from 'prop-types'
import '../assets/css/dataCard.css'
export const DataCard = (props) => {
    return (
        <div className='dataCard'>
            <div className='meta'>
                <h3>{props.nombre}</h3>
                <p>{props.cantidad}</p>
            </div>
           <img src={props.icono} alt=""></img>
        </div>
    )
}

DataCard.propTypes={
    nombre: propTypes.string,
    cantidad: propTypes.number
}

DataCard.defaultProps={
    nombre: 'Default',
    cantidad: null
}