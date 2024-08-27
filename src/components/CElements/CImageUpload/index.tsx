import React, { useRef, useState } from 'react'
import { ImageIcons } from '../../Ui/IconGenerator/Svg'
import CircularProgress from '@mui/joy/CircularProgress';

interface Props {
    style?: React.CSSProperties,
    classes?: string
}
const CImageUpload = ({style, classes}:Props) => {

    const ref = useRef<any>(null)
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)

    const inputChangeHandler = (e: any) => {
        if (!e.target.files[0]) return;
        setLoading(true)
        setImage(URL.createObjectURL(e.target.files[0]))


        const file = e.target.files[0]
        const format = new FormData()
        format.append('file', file)

        setTimeout(() => {
            setLoading(false)
        }, 900)
    }



    return (
        <>
            <div style={style} onClick={() => ref.current.click()} className={`flex items-center cursor-pointer justify-center  h-[200px] bg-[var(--gray10)] rounded-md ${classes}`} >

                {loading || image ? <img src={image} alt="image" className={`h-full w-full object-fill box-border ${classes}`} /> :

                    <div className='flex flex-col items-center'>
                        {loading ? <CircularProgress color="neutral" size='sm' /> :
                            <>
                                <ImageIcons />
                                <p className='underline text-[#858592]'>Upload image</p>
                            </>
                        }
                    </div>
                }

                <input onChange={inputChangeHandler} ref={ref} type="file" accept=".jpg, .jpeg, .png, .svg" hidden />
            </div>
        </>
    )
}

export default CImageUpload