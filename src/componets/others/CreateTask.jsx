import React, { useState } from 'react'

const CreateTask = () => {
  const [Tasktitle, setTasktitle] = useState('')
  const [AssignTo, setAssignTo] = useState('')
  const [TaskDate, setTaskDate] = useState('')
  const [Category, setCategory] = useState('')
  const [TaskDescription, setTaskDescription] = useState('')

  const formHandler = e => {
    console.log(
      Tasktitle,
      AssignTo,
      TaskDate,
      Category,
      TaskDescription)
    e.preventDefault()
  }
  return (
    <div className='mt-8 bg-[#1c1c1c] p-6 rounded-md'>
      <form
        onSubmit={formHandler}
        className='flex gap-4 mt-4 justify-between h-[405px] w-full fm'
      >
        <div className='flex flex-col gap-4 w-1/2 h-full frm'>
          <h3 className='text-2xl font-semibold'>Create Task</h3>
          <input
            required
            value={Tasktitle}
            onChange={e => setTasktitle(e.target.value)}
            type='text'
            placeholder='Task Title'
            className='p-2 rounded-md bg-transparent border-2 border-white outline-none'
          />
          <h3 className='text-xl font-semibold'>Assign To</h3>
          <input
            required
            value={AssignTo}
            onChange={e => setAssignTo(e.target.value)}
            type='text'
            placeholder='Task Assign To'
            className='p-2 rounded-md bg-transparent border-2 border-white outline-none'
          />
          <h3 className='text-xl font-semibold'>Task Date</h3>
          <input
            required
            value={TaskDate}
            onChange={e => setTaskDate(e.target.value)}
            type='date'
            placeholder='Task Date'
            className='p-2 rounded-md bg-transparent border-2 border-white outline-none'
          />
          <h3 className='text-xl font-semibold'>Category</h3>
          <input
            required
            value={Category}
            onChange={e => setCategory(e.target.value)}
            type='text'
            placeholder='Task Category'
            className='p-2 rounded-md bg-transparent border-2 border-white outline-none'
          />
        </div>
        <div className='flex flex-col gap-4 w-1/2 h-full frm'>
          <h3 className='text-xl font-semibold'>Task Description</h3>
          <textarea
            required
            value={TaskDescription}
            onChange={e => setTaskDescription(e.target.value)}    
            type='text'
            placeholder='Task Description'
            className='p-2 rounded-md bg-transparent border-2 border-white h-full resize-none outline-none'
          />
          <button
            type='submit'
            className='bg-emerald-400 text-white px-4 py-2 rounded-md font-semibold  font-2xl active:scale-95 transition-all duration-200 hover:bg-emerald-700 hover:text-white'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
