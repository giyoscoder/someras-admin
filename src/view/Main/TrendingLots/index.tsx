import React from 'react'
import CCard from '../../../components/CElements/CCard'
import CImageUpload from '../../../components/CElements/CImageUpload'
import HFTextField from '../../../components/CElements/CTextField'
import SingleInputDateRangePicker from '../../../components/CElements/CDate'
import CInputTextMask from '../../../components/CElements/CInputTextMask'
import { ControllerProps } from '../../../types/props'
import { useForm } from 'react-hook-form'
import AddButton from '../../../components/Ui/Button/AddButton'
import HFTextarea from '../../../components/CElements/CTextarea'

const TrendingLots = () => {
    const { control, handleSubmit, setValue, reset } = useForm({
        mode: "onSubmit",
    });
    return (
        <div className=''>
            <CCard title='Trending lots' classes={'inline-block space-y-[10px]'}>
                <CImageUpload />
                <HFTextField control={control} name='trend-name' label={'Title'} required placeholder='Title...' />
                <SingleInputDateRangePicker label='Date' />
                <CInputTextMask required label='Price' control={control} name='price' placeholder={'Price...'} />
                <HFTextarea control={control} name='trend-desc' label={'Description'} required placeholder='Description...' />
                <div><AddButton text='Submit' type={'submit'} /></div>
            </CCard>
        </div>
    )
}

export default TrendingLots