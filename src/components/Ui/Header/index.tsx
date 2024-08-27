import React from 'react'
import cls from './style.module.scss';
import { Dashboard } from '../IconGenerator/Svg';
import Notification from '../Notification';

interface Props {
    title: string,
    stiky?: boolean,
    notification?: boolean,
    children?: React.ReactNode;
}

const Header = ({ title, stiky, children, ...props }: Props) => {
    return (
        <div className='h-[64px] w-full fixed top-0 z-50 bg-white border-b border-[var(--mainColor)]'>
            <div className={cls.header} {...props}>
                {
                    children ? children : <h3 className='flex items-center gap-2'>
                        <Dashboard fill='var(--mainColor)' />
                        <span className='text-[24px] text-[var(--mainColor)]'>{title}</span>
                    </h3>
                }
                <Notification />
            </div>
        </div>
    )
}

export default Header