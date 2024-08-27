import CImageUpload from '../../../components/CElements/CImageUpload'
import CSelect from '../../../components/CElements/CSelect'
import SingleInputDateRangePicker from '../../../components/CElements/CDate'
import HFTextarea from '../../../components/CElements/CTextarea'
import AddButton from '../../../components/Ui/Button/AddButton'
import HFTextField from '../../../components/CElements/CTextField'
import { country } from './logic';
import CCard from '../../../components/CElements/CCard'
import { useForm } from 'react-hook-form'



const ShowcaseSection = () => {
    const { control, handleSubmit, setValue, reset } = useForm({
        mode: "onSubmit",
    });

    return (
        <div>
            <CCard title='Showcase'>
                <div className='lg:flex items-start gap-6 '>
                    <div className='lg:max-w-[300px] w-full'>
                        <CImageUpload />
                    </div>
                    <div className='flex-1 lg:grid grid-cols-2  gap-6'>
                        <div>
                            <CSelect control={control} placeholder='Country' required clickHandler={(val) => setValue('title', val.title)} options={country} label='Country' name='country' />
                            <SingleInputDateRangePicker label='Date' />
                            <HFTextField control={control} name='title' label={'Title'} required placeholder='Title...' />
                        </div>
                        <HFTextarea control={control} name='description' label='Description' required placeholder='Description...' />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div>
                        <AddButton text='Submit' />
                    </div>
                </div>
            </CCard>
        </div>
    )
}

export default ShowcaseSection