import React from 'react'
import { ButtonAuth, Gap } from '../../atoms'
import './headerauth.scss'
const HeaderAuth = () => {
    return (
        <div className='header-auth-main'>
            <div className='header-auth-left'>
                <Gap width={20}/>
                <p className='header-title'>JalanPintar.com</p>
            </div>
            <div className='header-auth-right'>
                <ButtonAuth title = "Log in" />
                <Gap width={20} />
                <ButtonAuth title = "Sign up" />
                <Gap width={20} />
            </div>
        </div>
    )
}

export default HeaderAuth
