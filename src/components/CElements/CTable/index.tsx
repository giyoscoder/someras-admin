import React from 'react'
import { CTableBody, CTableHeadCell, CTableHeadRow, CTableHead, CTableRow, CTableWrapper, CTableCell } from './Detail'
import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import { TableRow } from '@mui/material';

const headerColumn = [
    {
        title: 'Name',
        id: 'name'
    },
    {
        title: 'Surname',
        id: 'surname'
    },
    {
        title: 'Age',
        id: 'age'
    },
    {
        title: 'Job',
        id: 'job'
    }
]

const bodyColumns = [
    {
        id: 1,
        name: 'Alisher',
        surname: 'Anvarov',
        age: 45,
        job: 'Frontend Developer',
    },
    {
        id: 1,
        name: 'Alisher',
        surname: 'Anvarov',
        age: 45,
        job: 'Frontend Developer',
    },
    {
        id: 1,
        name: 'Alisher',
        surname: 'Anvarov',
        age: 45,
        job: 'Frontend Developer',
    },
    {
        id: 1,
        name: 'Alisher',
        surname: 'Anvarov',
        age: 45,
        job: 'Frontend Developer',
    }
]


const CTable = () => {
    const navigate = useNavigate()
    const clickHandler = (e: any) => {
        navigate(`/user/${e.id}`)
    }
    return (
        <div id='table'>
            <CTableWrapper>
                <CTableHead>
                    <CTableHeadRow>
                        {headerColumn?.map(({ title }, idx) => (
                            <CTableHeadCell key={idx}>{title}</CTableHeadCell>
                        ))}
                    </CTableHeadRow>
                </CTableHead>
                <CTableBody>
                    {bodyColumns?.map((item: any, idx: number) => (
                        <TableRow key={idx} onClick={() => clickHandler(item)}>
                            {headerColumn?.map(({ id }: { id: string }) => (
                                <CTableCell>
                                    {item?.[id]}
                                </CTableCell>
                            ))}
                        </TableRow>
                    ))}
                </CTableBody>
            </CTableWrapper>
        </div>
    )
}

export default CTable