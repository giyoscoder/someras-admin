import React from 'react'
import CCard from '../../../../components/CElements/CCard'
import CImageUpload from '../../../../components/CElements/CImageUpload'
import HFTextField from '../../../../components/CElements/CTextField'
import { useForm } from 'react-hook-form'

const Locations = () => {
  const { control } = useForm()
  return (
    <div className=' mt-5 w-[300px]'>
      <form action="">
        <CCard title='Location' classes={'space-y-3'}>
          <CImageUpload />
          <HFTextField control={control} name='works' label='Name' required />
        </CCard>
      </form>
    </div>
  )
}

export default Locations