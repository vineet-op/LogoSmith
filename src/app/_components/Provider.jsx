import React from 'react'
import Header from "./Header"

const Provider = ({ children }) => {
    return (
        <div className=''>
            {/* <Header /> */}
            {children}
        </div>
    )
}

export default Provider