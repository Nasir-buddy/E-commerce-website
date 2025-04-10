import React, { createContext, useEffect, useState } from 'react'
import { getlocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()
//localStorage.clear()




const AuthProvider = ({children}) => {

    const [userData , setUserData] = useState(null)
    


    useEffect(() =>{
        console.log("local data", getlocalStorage())
        const {employees } = getlocalStorage()
      
        setUserData(employees)
        
    }, [])



  return (
    <div>

        <AuthContext.Provider value={[userData , setUserData]}>
        {children}
        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
