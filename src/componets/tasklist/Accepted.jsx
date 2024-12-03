import React from 'react'

const Accepted = ({ LogInData }) => {
  return (
    <div className='flex flex-col flex-shrink-0 w-[100%] md:w-[30%] h-[300px] bg-yellow-600 rounded-xl px-2 sm:px-4 py-2'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm sm:text-xl font-semibold bg-red-700 px-1 sm:px-2 py-1 rounded'>
          {LogInData.tasks[1].category}
        </h3>
        <h4 className='text-xs sm:text-sm font-medium pt-2'>
          {LogInData.tasks[1].taskDate}
        </h4>
      </div>
      <h2 className='text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 text-center'>
        {LogInData.tasks[1].taskTitle}
      </h2>
      <p className='text-base sm:text-lg font-medium mt-4 sm:mt-6'>
        {LogInData.tasks[1].taskDescription}
      </p>
      <div className='flex items-center justify-center gap-4 mt-4 sm:mt-6'>
        <button className='w-full sm:w-auto bg-green-600 text-white px-2 sm:px-10 py-1 sm:py-2 rounded-full font-semibold text-sm sm:text-base active:scale-95 transition-all duration-100'>
          Accept
        </button>
      </div>
    </div>
  )
}

export default Accepted
