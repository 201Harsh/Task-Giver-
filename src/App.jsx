import React, { useEffect, useState, useContext } from 'react'
import Login from './componets/Login/Login'
import Employee from './componets/Dashboard/Employee'
import Admin from './componets/Dashboard/Admin'
import { AuthContext } from './componets/Auth/Auth'

const App = () => {
  const [user, setUser] = useState(null)
  const [LogInData, setLogInData] = useState(null)
  const AuthData = useContext(AuthContext)

  useEffect(() => {
    const loggedInuser = localStorage.getItem('loggedInUser')
    if (loggedInuser) {
      const userData = JSON.parse(loggedInuser)
      setUser(userData.role)
      setLogInData(userData.data)
    }
  }, [])

  const loginHandler = (email, password) => {
    if (email == 'admin@a.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (AuthData) {
      const employee = AuthData.employees.find(
        e => email == e.email && password == e.password
      )
      if (employee) {
        setUser('employee')
        setLogInData(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
      }
    }
  }
  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ''}
      {user == 'admin' ? <Admin AuthData={AuthData} /> : user == 'employee' ? <Employee LogInData={LogInData} /> : null}
    </>
  )
}

export default App
