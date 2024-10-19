import React from 'react'

export const Counter = ({ numberOfItemsPacked, totalNumberOfItems }) => {
    return (
        <p>
            <b>{numberOfItemsPacked }</b> / { totalNumberOfItems } items packed
        </p>
    )
}
