import React from 'react'
import './buttonauth.scss'

const ButtonAuth = (props) => {
    return (
        <div>
            <button className='button-auth'>{props.title}</button>
        </div>
    )
}

export default ButtonAuth
