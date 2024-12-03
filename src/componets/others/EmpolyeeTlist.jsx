import React from 'react'

const EmpolyeeTlist = ({ AuthData }) => {
  return (
    <div>
      <div className='flex flex-col gap-4 w-full mt-10 bg-[#1C1C1C] p-4'>
        <div className='flex justify-evenly items-center w-full h-[50px] bg-red-400 gap-6 p-2 gl'>
          <h3 className='w-1/5 font-semibold text-xl'>Employee Name</h3>
          <h3 className='w-1/5 font-semibold text-xl'>NewTask</h3>
          <h2 className='w-1/5 font-semibold text-lg '>Accepted</h2>
          <h2 className='w-1/5 font-semibold text-lg'>Completed</h2>
          <h2 className='w-1/5 font-semibold text-lg '>Failed</h2>
        </div>
        <div className='mg'>
          <h1 className='text-3xl font-semibold text-center mb-4'>Employee List</h1>
        </div>
        <div className='flex gap-4 flex-col'>
          {AuthData.employees.map((e, idx) => {
            return (
              <div
                className='flex justify-evenly items-center w-full h-[50px] border-2 border-emerald-300 p-2 gap-8'
                key={idx}
              >
                <h3 className='font-semibold text-xl w-1/5'>{e.firstName}</h3>
                <h3 className='font-semibold text-xl text-blue-400 w-1/5'>
                  {e.taskCounts.newTask}
                </h3>
                <h2 className='font-semibold text-lg text-yellow-300 w-1/5'>
                  {e.taskCounts.active}
                </h2>
                <h2 className='font-semibold text-lg w-1/5'>
                  {e.taskCounts.completed}
                </h2>
                <h2 className='font-semibold text-lg text-red-500 w-1/5'>
                  {e.taskCounts.failed}
                </h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EmpolyeeTlist
