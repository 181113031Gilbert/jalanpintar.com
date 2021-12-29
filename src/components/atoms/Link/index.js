import React from 'react'
import './link.scss'
const Link = (props) => {
    return (
        <div className='link-container'>
          <a className='link' href={props.link}>{props.title}</a>
        </div>
    )
}

export default Link
