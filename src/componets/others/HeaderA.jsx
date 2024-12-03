import React from 'react'
import { getLocalStorage } from '../../utils/Localstorage'
const HeaderA = ({ AuthData }) => {
  const LogOutUser = () => {
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }

  return (
    <div className='sm:flex sm:items-center sm:justify-between mt-4'>
      <h1 className='sm:text-4xl text-3xl font-medium'>
        Hello <br />
        <span className='sm:text-emerald-400 sm:font-semibold sm:font-3xl text-emerald-500 font-semibold'>
          Admin &nbsp;
          <span className='sm:hidden'>👋</span>
        </span>
      </h1>
      <button
        onClick={LogOutUser}
        className='sm:bg-red-700 mt-6 sm:text-white sm:px-4 sm:py-2 sm:rounded-md sm:font-medium sm:font-2xl sm:active:scale-95 sm:transition-all sm:duration-200 bg-red-500 text-white px-2 py-1 rounded-md font-medium font-xl active:scale-95 transition-all duration-200'
      >
        Log out
      </button>
    </div>
  )
}

export default HeaderA
