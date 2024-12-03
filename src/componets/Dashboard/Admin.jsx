import React from 'react'
import HeaderA from '../others/HeaderA'
import CreateTask from '../others/CreateTask'
import EmpolyeeTlist from '../others/EmpolyeeTlist'

const Admin = ({ AuthData }) => {
  return (
    <div className='px-6'>
      <HeaderA AuthData={AuthData} />
      <CreateTask AuthData={AuthData} />
      <EmpolyeeTlist AuthData={AuthData} />
    </div>
  )
}

export default Admin
