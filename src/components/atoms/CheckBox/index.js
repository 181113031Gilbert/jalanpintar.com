import React from 'react'
import { Gap } from '..'
import './checkbox.scss'

const CheckBox = () => {
    return (
        <div className='checkbox-container'>
            <input type='checkbox' id='agreement' name='agreement' value="true" />
            <label className='label' for='agreement'>I have read and accept the terms
                <br />of service and privacy policy</label>
        </div>
    )
}

export default CheckBox