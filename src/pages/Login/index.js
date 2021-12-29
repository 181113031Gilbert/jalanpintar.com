import React from 'react'
import { LoginBg } from '../../assets'
import { ButtonCreate, Gap, Input, Link } from '../../components'


const Login = () => {
    return (
        <div className='body-register'>
            <div className='body-left'>
                <div className='body-left-title' >
                    <p>JalanPintar.com</p>
                    <p>Log in</p>
                </div>
                <div className='body-left-input'>
                    <Gap height={25} />
                    <div className='have-account-container'>
                        <p className='have-account-text'>Not a member yet?</p>
                        <Link link="" title="Join" />
                    </div>
                    <Input label="Email" placeholder="Email" />
                    <Input label="Password" placeholder="Password" />
                    <Gap height={10} />
                    <div className='forgot'>
                        <Link link="" title="forgot password ?" />
                    </div>
                    <Gap height={20} />
                    <ButtonCreate title="Log in" />
                </div>
            </div>
            <div className='body-right'>
                <img src={LoginBg} alt='register background' />
            </div>
        </div>
    )
}

export default Login
