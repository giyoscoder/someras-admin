import React from 'react'
import CCard from '../../../components/CElements/CCard'
import CImageUpload from '../../../components/CElements/CImageUpload'
import HFTextField from '../../../components/CElements/CTextField'
import SingleInputDateRangePicker from '../../../components/CElements/CDate'
import CInputTextMask from '../../../components/CElements/CInputTextMask'
import { ControllerProps } from '../../../types/props'
import CSelect from '../../../components/CElements/CSelect'
import { useForm } from 'react-hook-form'
import AddButton from '../../../components/Ui/Button/AddButton'
import { IoMdAdd } from 'react-icons/io'
import HFTextarea from '../../../components/CElements/CTextarea'

const options = [
    { label: 'Uzbekistan', value: 'uz' },
    { label: 'New York', value: 'nyk' },
    { label: 'Usa', value: 'us' },
    { label: 'Italy', value: 'itl' },
]

const Upcoming = () => {
    const { control, handleSubmit, setValue, reset } = useForm({
        mode: "onSubmit",
    });

    return (
        <div className=''>
            <CCard title='Upcoming auctions' classes={'inline-block space-y-[10px]'}>
                <CImageUpload />
                <CSelect options={options} control={control} name='country' label='Location' required />
                <SingleInputDateRangePicker label='Date' />
                <HFTextField control={control} name='creator' label={'Creator'} required placeholder='Creator...' />
                <HFTextarea control={control} name='trend-desc' label={'Description'} required placeholder='Description...' />
                <div >
                    <AddButton text='Submit' type={'submit'} />
                </div>
            </CCard>
        </div>
    )
}

export default Upcoming