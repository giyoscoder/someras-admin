import React from 'react'
import CCard from '../../../components/CElements/CCard'
import CImageUpload from '../../../components/CElements/CImageUpload'
import HFTextField from '../../../components/CElements/CTextField'
import { useForm } from 'react-hook-form'
import HFTextarea from '../../../components/CElements/CTextarea'
import AddButton from '../../../components/Ui/Button/AddButton'

const Contact = () => {
    const { control, handleSubmit, setValue, reset } = useForm({
        mode: "onSubmit",
    });
    return (
        <CCard title='Contact a specialist'>
            <div className='flex items-start gap-6'>
                <div className='w-[200px]'>
                    <CImageUpload />
                </div>
                <div className='flex-1 '>
                    <div className='flex items-center gap-4'>
                        <HFTextField control={control} name='specialist_name' label='Name' required />
                        <HFTextField control={control} name='specialist_job' label='Job' required />
                    </div>
                    <HFTextarea control={control} name='specialist_about' label='Info' required />
                </div>
            </div>
            <div className='flex items-center justify-end mt-6'>
                <div>
                    <AddButton text='Submit' />
                </div>
            </div>
        </CCard>
    )
}

export default Contact