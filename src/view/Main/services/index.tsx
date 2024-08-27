import React from 'react'
import CTabs from '../../../components/CElements/CTabs'
import { tabsList, TabActions } from './logic';
import useGetQueries from '../../../hooks/useGetQuries';

const Services = () => {
    const { services } = useGetQueries()
    const { GetCurrentPage } = TabActions()
    return (
        <div>
            <div className='flex'>
                <CTabs tabList={tabsList} slug='services' />
            </div>
            <div>
                {GetCurrentPage(services)}
            </div>
        </div>
    )
}

export default Services