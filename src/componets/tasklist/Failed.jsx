import React from 'react'

const Failed = ({ LogInData }) => {
  return (
    <div className='flex flex-col flex-shrink-0 w-[30%] h-[300px] bg-sky-600 rounded-xl px-4 py-2'>
      <div className='flex items-center justify-between'>
        <h3 className='text-xl font-semibold bg-red-700 px-2 py-1 rounded'>
          {LogInData.tasks[2].category}
        </h3>
        <h4 className='text-sm font-medium pt-2'>
          {LogInData.tasks[2].taskDate}
        </h4>
      </div>
      <h2 className='text-2xl font-semibold mt-6 text-center'>
        {LogInData.tasks[2].taskTitle}
      </h2>
      <p className='text-lg  font-medium mt-6'>
        {LogInData.tasks[2].taskDescription}
      </p>
      <div className='flex items-center justify-center gap-4 mt-6'>
        <button className='bg-red-700 text-white px-10 py-2 rounded-full font-semibold active:scale-95 transition-all duration-100'>
          Failed
        </button>
      </div>
    </div>
  )
}

export default Failed
