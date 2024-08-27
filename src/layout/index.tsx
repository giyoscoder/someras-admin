import React from 'react'
import cls from './style.module.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Ui/Sidebar';

const MainLayout = () => {
    return (
        <div className={cls.layout}>
            <Sidebar />
            <div className={cls.content}>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout