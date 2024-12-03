import React from 'react'

const TaskNumber = ({ LogInData }) => {
  return (
    <div className='flex flex-col md:flex-row items-start w-full h-full mt-8 gap-4'>
      <div className='w-full md:w-[30%] h-[160px] bg-blue-500 flex items-start gap-4 flex-col p-4 rounded-xl'>
        <h1 className='text-3xl md:text-4xl font-bold mt-4'>
          {LogInData.taskCounts.newTask}
        </h1>
        <h2 className='text-xl md:text-2xl font-semibold'>New Task</h2>
      </div>
      <div className='w-full md:w-[30%] h-[160px] bg-green-600 flex items-start gap-4 flex-col p-4 rounded-xl'>
        <h1 className='text-3xl md:text-4xl font-bold mt-4'>
          {LogInData.taskCounts.active}
        </h1>
        <h2 className='text-xl md:text-2xl font-semibold'>Accepted</h2>
      </div>
      <div className='w-full md:w-[30%] h-[160px] bg-yellow-500 flex items-start gap-4 flex-col p-4 rounded-xl'>
        <h1 className='text-3xl md:text-4xl font-bold mt-4'>
          {LogInData.taskCounts.completed}
        </h1>
        <h2 className='text-xl md:text-2xl font-semibold'>Completed</h2>
      </div>
      <div className='w-full md:w-[30%] h-[160px] bg-red-700 flex items-start gap-4 flex-col p-4 rounded-xl'>
        <h1 className='text-3xl md:text-4xl font-bold mt-4'>
          {LogInData.taskCounts.failed}
        </h1>
        <h2 className='text-xl md:text-2xl font-semibold'>Failed</h2>
      </div>
    </div>
  )
}

export default TaskNumber
