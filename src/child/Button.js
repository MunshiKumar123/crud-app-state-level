import React from 'react'

function Button({
    onClick,
    className,
    children

}) {
    return (
        <React.Fragment>
            <button
                onClick={onClick}
                className={className}>
                {children}
            </button>


        </React.Fragment>
    )
}

export default Button
