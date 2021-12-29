import React from 'react'
import { RegisterBg } from '../../assets'
import { ButtonCreate, Gap, Input, Link } from '../../components'
import CheckBox from '../../components/atoms/CheckBox'
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
                    <div className='have-account-container'>
                        <p className='have-account-text'>Already have an Account?</p>
                        <Link link="" title = "Login" />
                    </div>
                    <Input label="Email" placeholder="Email" />
                    <Input label="Password" placeholder="Password" />
                    <CheckBox />
                    <Gap height={10} />
                    <ButtonCreate title="Create Account" />
                </div>
            </div>
            <div className='body-right'>
                <img src={RegisterBg} alt='register background' />
            </div>
        </div>
    )
}

export default Register
