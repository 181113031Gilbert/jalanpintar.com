import React from 'react'
import { FbIcon, IgIcon, MapIcon, MsgIcon, PhoneIcon } from '../../../assets'
import { Contact } from '../../atoms'
import './footeruth.scss'

const FooterAuth = () => {
    return (
        
        <div className='footer-auth-main'>
            <p>Hubungi Kami :</p>
           <div className='footer-auth-row'>
           <div className='footer-auth-left'>
                <Contact icon = {MapIcon} title = "Jalan Kaki no 42" />
                <Contact icon = {MsgIcon} title = "jalanpintar.com@gmai.com" />
                <Contact icon = {PhoneIcon} title = "0834673463746" />
            </div>
            <div className='footer-auth-right'>
            <Contact icon = {FbIcon} title = "Jalan Pintar" />
            <Contact icon = {IgIcon} title = "@Jalan_Pintar" />
            </div>
           </div>
        </div>
    )
}

export default FooterAuth
