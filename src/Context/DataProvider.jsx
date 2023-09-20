import React, { useState } from 'react'
import InitContext from './InitContext'

function DataProvider({ children }) {
    const [data, setData] = useState({})
    return (
        <InitContext.Provider value={{ data, setData }}>
            {children}
        </InitContext.Provider>
    )
}

export default DataProvider