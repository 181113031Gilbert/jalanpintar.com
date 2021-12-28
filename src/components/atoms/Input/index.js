import React from 'react'
import './input.scss'

const Input = (props) => {
    return (
        <div>
            <p className='label'>{props.label}</p>
            <input className='input' placeholder={props.placeholder} />
        </div>
    )
}

export default Input
