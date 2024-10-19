import React from 'react'

export const Button = ({onClick, buttonType, children}) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}
        >
            {children}
        </button>
    )
}
