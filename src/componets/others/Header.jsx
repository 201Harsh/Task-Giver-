import React from 'react'

const Header = ({ LogInData }) => {
  const LogOutUser = () => {
    localStorage.removeItem('loggedInUser')
    window.location.reload()
  }
  return (
    <div>
      <div className='flex items-center justify-between mt-4'>
        <h1 className='text-4xl font-medium'>
          Hello <br />
          <span className='text-emerald-400 font-semibold font-3xl'>
            {LogInData.firstName} 👋
          </span>
        </h1>
        <button
          onClick={LogOutUser}
          className='bg-red-700 text-white px-4 py-2 rounded-md font-medium font-2xl active:scale-95 transition-all duration-200'
        >
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
