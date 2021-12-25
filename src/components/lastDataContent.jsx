import React from 'react'

export const lastDataContent = (props) => {
    return (
        <div className='lastDataContent'>
            <h1>Último {props.dato} agregado</h1>
            <div className='content'>
                <img src={props.imagen}> </img>
                <p className='dataName'>{props.nombre}</p>
                <button className='btnDetail' alt=''>Detalle del {props.dato}</button>
            </div>
        </div>
    )
}
