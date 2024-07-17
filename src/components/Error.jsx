import React from 'react'
import errorimg from '../static/images/errorgif.gif'

const Error = () => {
  return (
    <div>
        <img src={errorimg} alt='404 NOT FOUND'></img>
    </div>
  )
}

export default Error