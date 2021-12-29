import React from 'react'
import { Gap } from '..'
import './contact.scss'

const Contact = (props) => {
    return (
        <div>
            <Gap height={5} />
            <div className='contact'>
                <img className='contact-icon' src={props.icon} alt='icon' />
                <Gap width={20} />
                <p className='contact-title'>{props.title}</p>
            </div>
        </div>
    )
}

export default Contact
