import React from 'react';
import { Link } from 'react-router-dom';

interface ReactProps {
    children: React.ReactNode,
}
export const CTableWrapper = ({ children }: ReactProps) => {
    return <table className='table'>
        {children}
    </table>
}


export const CTableHead = ({ children, ...props }: ReactProps) => {
    return <thead {...props} className='CTableHead'>{children}</thead>
}

export const CTableHeadRow = ({ children }: ReactProps) => {
    return <tr className='CTableHeadRow'>{children}</tr>
}

export const CTableHeadCell = ({ children }: ReactProps) => {
    return <th className='CTableHeadCell'>{children}</th>
}


export const CTableBody = ({ children }: ReactProps) => {
    return <tbody>{children}</tbody>
}

export const CTableCell = ({ children }: ReactProps) => {
    return <td className='CTabelCell'>
        {children}
    </td>
}

export const CTableRow = ({ children,  ...props }: ReactProps) => {
    return <tr {...props} className='CTableRow'>
        {children}
    </tr>
}