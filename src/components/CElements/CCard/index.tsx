import React from 'react'

const CCard = ({ title, children, classes, style }: { title?: string, classes?: any, style?: React.CSSProperties, children: React.ReactNode }) => {
    return (
        <div>
            {title && <h2 className='mb-2 font-bold '>{title}</h2>}
            <div style={style}
                className={`border border-var(--default) shadow-sm shadow-[var(--mainColor)] p-3 rounded-md ${classes}`}
            >
                {children}
            </div>
        </div>
    )
}

export default CCard