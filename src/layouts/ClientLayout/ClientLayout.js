import React from 'react'

export function ClientLayout(props) {
    const { children } = props;
    return (
        <div>
            <p>ClientLayout</p>
            <p>{children}</p>
        </div>
    )
}
