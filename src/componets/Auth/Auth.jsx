import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../../utils/Localstorage'

export const AuthContext = createContext()


const Auth = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])

  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin })
  }, [])

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  )
}

export default Auth
