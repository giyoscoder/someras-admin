import { Button } from '@mui/material'
import React from 'react'
import './style.scss';

interface Props {
    id?: string,
    type?:any,
    onClick?: () => void,
    classes?: React.CSSProperties,
    text?: string,
    children?: React.ReactNode
}

const AddButton = ({ id, onClick = () => { }, type = 'button', classes, text, children, ...props }: Props) => {


    return (
        <div id={id ? id : 'addBtn'} {...props}>
            <Button
                type={type}
                onClick={onClick}
                className={`${classes}`}
            >
                {children ? children : <span>{text}</span>}
            </Button>
        </div>
    )
}

export default AddButton