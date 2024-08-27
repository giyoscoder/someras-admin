import React from 'react'
import CCard from '../../../components/CElements/CCard'
import CImageUpload from '../../../components/CElements/CImageUpload'
import HFTextField from '../../../components/CElements/CTextField'
import SingleInputDateRangePicker from '../../../components/CElements/CDate'
import CInputTextMask from '../../../components/CElements/CInputTextMask'
import { ControllerProps } from '../../../types/props'
import CSelect from '../../../components/CElements/CSelect'
import { useForm } from 'react-hook-form'
import HFTextarea from '../../../components/CElements/CTextarea'
import AddButton from '../../../components/Ui/Button/AddButton'
import { IoMdAdd } from 'react-icons/io'

const fake_options = [
  { label: 'Uzbekistan', value: 'uz' },
  { label: 'New York', value: 'nyk' },
  { label: 'Usa', value: 'us' },
  { label: 'Italy', value: 'itl' },
]

const fake_types = [
  { label: 'Article', value: 'art' },
  { label: 'Jurnal', value: 'jur' },
  { label: 'Hand write', value: 'hw' },
  { label: 'Book', value: 'book' },
]


const LastesStories = () => {
  const { control, handleSubmit, setValue, reset } = useForm({
    mode: "onSubmit",
  });

  return (
    <div className=''>
      <CCard title='Latest stories' classes={'inline-block space-y-[10px]'}>
        <CImageUpload />
        <CSelect options={fake_types} control={control} name='stories-type' label='Types' required />
        <SingleInputDateRangePicker label='Date' />
        <HFTextField control={control} name='creator' label={'Creator'} required placeholder='Creator...' />
        <HFTextarea control={control} name='stores-desc' label={'Description'} required placeholder='Description...' />
        <div >
          <AddButton text='Submit' type={'submit'} />
        </div>
      </CCard>
    </div>
  )
}

export default LastesStories