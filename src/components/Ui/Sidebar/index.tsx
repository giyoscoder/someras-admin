import React from 'react'
import cls from './style.module.scss';
import Section from './Section';

const Sidebar = () => {
    return (
        <div className={cls.sidebar}>
            <div className='h-[64px] flex items-center  pl-[14px] borber border-[var(--mainColor)]'>
                <img src='https://hardcorelite.com/assets/img/somberas.png' alt="logo-image" className='w-[150px] box-border' />
            </div>
            <Section />
        </div>
    )
}

export default Sidebar