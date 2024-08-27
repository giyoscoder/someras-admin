import React from 'react'
import CCard from '../../../../components/CElements/CCard'
import CImageUpload from '../../../../components/CElements/CImageUpload'
import HFTextField from '../../../../components/CElements/CTextField'
import { useForm } from 'react-hook-form'

const Services = () => {
  const { control } = useForm()
  return (
    <div className='w-[300px] mt-5'>
      <form action="">
        <CCard title='Services' classes={'space-y-3'}>
          <CImageUpload />
          <HFTextField control={control} name='works' label='Name' required />
        </CCard>
      </form>
    </div>
  )
}

export default Services