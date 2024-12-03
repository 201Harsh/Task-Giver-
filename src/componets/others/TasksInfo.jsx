import React from 'react'
import NewTask from '../tasklist/NewTask'
import Accepted from '../tasklist/Accepted'
import Completed from '../tasklist/Completed'
import Failed from '../tasklist/Failed'
const TasksInfo = ({ LogInData }) => {
  return (
    <div
      className='flex gap-2 sm:gap-4 items-center justify-start w-full h-[300px] sm:h-[370px] mt-6 sm:mt-10 overflow-x-auto scrollbar-hide fty '
      id='str'
    >
      {LogInData.tasks.map((t, idx) => {
        if (t.newTask) {
          return <NewTask key={idx} LogInData={LogInData} />
        }
        if (t.active) {
          return <Accepted key={idx} LogInData={LogInData} />
        }
        if (t.completed) {
          return <Completed key={idx} LogInData={LogInData} />
        }
        if (t.failed) {
          return <Failed key={idx} LogInData={LogInData} />
        }
      })}
    </div>
  )
}

export default TasksInfo
