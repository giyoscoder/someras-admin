import React from 'react';
export interface ControllerProps {
    control: any,
    name?: string,
    label?: string,
    required?: boolean,
    placeholder?: string,
    setValue?: (name: string, value: any) => void,
    defaultValue?: any,
    handlerChange?: (value?: any) => void,
    mask?: any[],
    error?: any,
    style?: React.CSSProperties,
}