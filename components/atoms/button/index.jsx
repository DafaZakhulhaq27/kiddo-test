import React from 'react'

const Button = ({textButton,className}) => {
  return (
    <button 
        type="button" 
        className={`btn btn-primary ${className}`}>
            {textButton}
    </button>
  )
}

export default Button