import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({
        // id: 123,
        // name: 'warner',
        // email: 'warner3898'
    })
    return (

        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter/>
        </UserContext.Provider>

    )
}
