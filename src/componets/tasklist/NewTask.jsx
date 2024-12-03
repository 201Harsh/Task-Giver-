import React from 'react'

const NewTask = ({ LogInData }) => {
  return (
    <div className='flex flex-col flex-shrink-0 w-[100%] md:w-[30%] h-[300px] bg-blue-400 rounded-xl px-2 sm:px-4 py-2'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm sm:text-xl font-semibold bg-red-700 px-1 sm:px-2 py-1 rounded'>
          {LogInData.tasks[0].category}
        </h3>
        <h4 className='text-xs sm:text-sm font-semibold pt-2'>
          {LogInData.tasks[0].taskDate}
        </h4>
      </div>
      <h2 className='text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 text-center'>
        {LogInData.tasks[0].taskTitle}
      </h2>
      <p className='text-base sm:text-lg font-medium mt-4 sm:mt-6'>
        {LogInData.tasks[0].taskDescription}
      </p>
      <div className='flex flex-col sm:flex-row items-center justify-start gap-2 sm:gap-4 mt-4 sm:mt-6'>
        <button className='w-full sm:w-auto bg-emerald-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-sm sm:text-base active:scale-95 transition-all duration-100'>
          Mark as Completed
        </button>
        <button className='w-full sm:w-auto bg-red-900 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-sm sm:text-base active:scale-95 transition-all duration-100'>
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default NewTask
