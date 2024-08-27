import React, { useEffect } from 'react';
import { Controller } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import CLabel from '../CLabel';
import '../style.scss'

interface Props {
    label?: string,
    style?: React.CSSProperties
    control: any,
    name: string
    required?: boolean,
    mask?: string,
    setValue?: (name: string, value: any) => void,
    placeholder?: string,
    defaultValue?: any
}

const CInputMask = ({
    label,
    style,
    control,
    name,
    required,
    mask = '',
    setValue = () => { },
    placeholder,
    defaultValue
}: Props) => {

    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue)
        }
    }, [defaultValue, setValue, name])

    return (
        <div style={style} className='cInputMask'>
            {label && <CLabel label={label} required={required} />}
            <Controller
                control={control}
                name={name}
                rules={{
                    required: required ? 'This is required field' : false
                }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <ReactInputMask
                            onChange={(e: any) => {
                                onChange(e.target.value)
                            }}
                            mask={mask}
                            value={value}
                            placeholder={placeholder}
                            required={required}
                        />

                    </>
                )}

            ></Controller>
        </div>
    )
}

export default CInputMask