import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage, setlocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
//localStorage.clear()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    
    useEffect(() => {
        // Initialize localStorage with employee data first
        setlocalStorage();
        
        // Then retrieve it
        const {employees} = getlocalStorage();
        console.log("Loaded employees:", employees);
        
        setUserData(employees);
    }, []);

    return (
        <div>
            <AuthContext.Provider value={[userData, setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
