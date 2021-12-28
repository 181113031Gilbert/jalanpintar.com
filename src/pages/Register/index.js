import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input } from '../../components'
import './register.scss'

const Register = () => {
    return (
        <div className='body-register'>
            <div className='body-left'>
                <div className='body-left-title' >
                    <p>JalanPintar.com</p>
                    <p>Sign Up</p>
                </div>
                <div className='body-left-input'>
                    <Gap height={25} />
                    <Input label="Nama" placeholder="Nama" />
                    <Input label="Email" placeholder="Email" />
                    <Input label="Password" placeholder="Password" />
                    <Button title="Register Account" />
                </div>
            </div>
            <div className='body-right'>
                <img src={RegisterBg} alt='register background' />
            </div>
        </div>
    )
}

export default Register
