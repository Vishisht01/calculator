import React from 'react'
import "../components/Button.css"
const Button = ({ symbol }) => {
    return (
        <div className='button-wrapper'>
            {symbol}
        </div>
    )
}

export default Button