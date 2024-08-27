import React from 'react'
import Header from '../../components/Ui/Header'
import CTable from '../../components/CElements/CTable'

const Users = () => {
  return (
    <div className=''>
      <div className='w-full pt-[64px] space-y-[30px]'>
        <Header title={'Users'} />
      </div>
      <div className='p-6'>
        <CTable />
      </div>
    </div>
  )
}

export default Users