import React from 'react'

export const DatosChildren = (props) => {
    return (
        <div>
            <p>Datos boludos</p>
            {props.children}
        </div>
    )
}
