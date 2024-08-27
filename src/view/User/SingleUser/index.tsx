import { useParams } from "react-router-dom"
import CCard from "../../../components/CElements/CCard"
import Header from "../../../components/Ui/Header";
import CImageUpload from "../../../components/CElements/CImageUpload";
import HFTextField from "../../../components/CElements/CTextField";
import { useForm } from "react-hook-form";
import CInputMask from "../../../components/CElements/CInputMask";
import SingleInputDateRangePicker from "../../../components/CElements/CDate";
import AddButton from "../../../components/Ui/Button/AddButton";

const SingleUser = () => {
  const { id } = useParams()
  const { control } = useForm()

  return (
    <div>
      <div className=''>
        <div className='w-full pt-[64px] space-y-[30px]'>
          <Header title={'Alisher'} />
        </div>
        <div className='p-6'>
          <CCard classes={'flex items-start gap-6'}>
            <CImageUpload classes="h-[150px] w-[150px] rounded-full" />
            <div className="flex items-start gap-6">
              <div>
                <HFTextField control={control} name='user' label="Name" />
                <HFTextField control={control} name='login' label="Login" />
              </div>
              <div>
                <CInputMask
                  name="phone"
                  control={control}
                  label='Phone number'
                  mask={"+\\9\\9\\8 99 999 99 99"}
                />
                <SingleInputDateRangePicker label="Date" />
              </div>
            </div>
            <div className="mt-[85px] flex items-end ">
              <AddButton text="Submit"/>
            </div>
          </CCard>
        </div>
      </div>
    </div>
  )
}

export default SingleUser