import React from 'react'
import { Gap } from '..'
import './input.scss'

const Input = (props) => {
    return (
        <div>
            <p className='label'>{props.label}</p>
            <input className='input' placeholder={props.placeholder} type={props.type} />
            <Gap height={10} />
        </div>
    )
}

export default Input
