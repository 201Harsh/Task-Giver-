import React, { Children } from 'react'
import Header from '../others/Header'
import TaskNumber from '../others/TaskNumber'
import TasksInfo from '../others/TasksInfo'
const Employee = ({ LogInData }) => {
  return (
    <div className='px-6'>
      <Header LogInData={LogInData} />
      <TaskNumber LogInData={LogInData} />
      <TasksInfo LogInData={LogInData} />
    </div>
  )
}

export default Employee
