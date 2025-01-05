import React from 'react'
import Header from "./Header"

const Provider = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Provider