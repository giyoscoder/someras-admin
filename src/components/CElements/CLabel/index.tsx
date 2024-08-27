import React from 'react'
import { CSSProperties } from 'styled-components'

const CLabel = ({ label, required, styles = {} }: { label: string, required?: boolean, styles?: CSSProperties }) => {
    return (
        <p className='' style={{ ...styles }}>
            {required && <span className='text-[var(--error)] mr-[2px]'>*</span>}
            {label}
        </p>
    )
}

export default CLabel