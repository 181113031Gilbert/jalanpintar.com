import React from 'react'
import './buttoncreate.scss'

const ButtonCreate = (props) => {
    return (
        <div>
            <button className='button-create'>{props.title}</button>
        </div>
    )
}

export default ButtonCreate
