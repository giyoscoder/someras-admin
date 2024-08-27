import React, { useEffect } from 'react'
import { Controller } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import CLabel from '../CLabel';
import { FormHelperText, Select, MenuItem } from '@mui/material';
import '../style.scss'

interface Props {
    control?: any,
    name: string,
    defaultValue?: any,
    required?: boolean,
    rules?: any,
    width?: string
    label?: string
    placeholder?: string,
    disabled?: boolean,
    onChange?: (e: any) => void,
    clickHandler?: (e: any) => void,
    setValue?: (name: string, value: any) => void
    options: { label: string, value?: string }[],

}

const CSelect = ({
    control,
    name,
    defaultValue,
    required,
    rules,
    width = '100%',
    label,
    placeholder,
    disabled,
    onChange = () => { },
    clickHandler = () => { },
    options,
    setValue = () => { },
    ...props
}: Props) => {

    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue)
        }
    }, [defaultValue, name, setValue])



    return (
        <div id='cselect'>
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue}
                rules={{
                    required: required ? 'This is required field!' : false,
                    ...rules
                }}
                render={({ field: { onChange: onFormChange, value }, fieldState: { error } }) => (
                    <FormControl style={{ width }}>
                        {label && <CLabel label={label} required={required} />}
                        <FormHelperText style={{ color: 'var(--error)' }} error>
                            <Select
                                value={value || defaultValue || ''}
                                size='small'
                                inputProps={{ placeholder }}
                                fullWidth
                                displayEmpty
                                disabled={disabled}
                                id='1'
                                renderValue={value !== '' ? undefined : () => <span style={{ color: 'var(--gray10)' }}>{placeholder}</span>}
                                onChange={(e) => {
                                    onChange(e.target.value)
                                    onFormChange(e.target.value)
                                }}
                                defaultValue={options[0].label}
                                {...props}
                            >
                                {options?.map((option?: any) => (
                                    <MenuItem
                                        key={option.value}
                                        onClick={() => clickHandler(option)}
                                        value={option.value}

                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>

                        </FormHelperText>
                    </FormControl>
                )}
            ></Controller>
        </div>
    )
}

export default CSelect