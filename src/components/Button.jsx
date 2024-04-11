import React from 'react'
import "../components/Button.css"
const Button = ({ symbol, color, onClick }) => {
    return (
        <div className='button-wrapper' style={{ backgroundColor: color }} onClick={() => onClick(symbol)}>
            {symbol}
        </div>
    )
}

export default Button