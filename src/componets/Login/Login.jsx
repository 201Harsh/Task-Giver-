import React, { useState } from 'react'

const Login = ({ loginHandler }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formhandler = e => {
    e.preventDefault()
    setEmail('')
    setPassword('')
    loginHandler(email, password)
  }
  return (
    <div className='flex items-center justify-center h-screen p-2 w-screen '>
      <div className='flex flex-col items-center justify-center h-[400px] w-[800px] border-2 border-emerald-400 rounded-xl'>
        <h1 className='text-4xl font-semibold mb-8'>Login</h1>
        <form className='flex flex-col gap-4' onSubmit={formhandler}>
          <input
            className='w-80 py-2 mt-4 px-5 rounded-full placeholder:text-gray-400 font-2xl font-semibold outline-none border-2 border-emerald-400 bg-transparent'
            type='email'
            placeholder='Enter Email'
            required
            value={email}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <input
            className='w-80 py-2 px-5 mt-4 rounded-full placeholder:text-gray-400 font-2xl font-semibold outline-none border-2 border-emerald-400 bg-transparent'
            type='password'
            placeholder='Enter Password'
            required
            value={password}
            onChange={e => {
              setPassword(e.target.value)
            }}
          />
          <button className='p-2 mt-4 bg-emerald-700 text-white rounded-full font-2xl font-semibold active:scale-95 transition-all duration-150'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
