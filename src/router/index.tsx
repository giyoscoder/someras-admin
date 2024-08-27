import React, { Suspense } from 'react'
import { Route, Routes, Navigation, Navigate } from 'react-router-dom'
import MainLayout from '../layout'
import { routeList } from './List'

interface Path {
    parent?: string,
    child?: string,
    sidebar?: boolean,
    title?: string,
}

const Router = () => {

    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        {routeList?.map((route: any, idx: any) => (
                            <Route path={`${route.parent}`} index={idx} element={route.element} />
                        ))}
                    </Route>
                    <Route index element={<Navigate to={'dashboard'}/>} />
                    <Route path='*' element={<Navigate to={'/'}/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default Router