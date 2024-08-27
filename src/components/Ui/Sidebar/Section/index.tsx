import React from 'react'
import cls from './style.module.scss';
import { routeList } from '../../../../router/List';
import { NavLink, useLocation } from 'react-router-dom';
import IconGenerator from '../../IconGenerator';

const Section = () => {

    return (
        <div className={cls.section}>

            {routeList?.filter((li) => li.sidebar)?.map(({ parent, title, icon }: { parent: string, title: string, icon: any }) => (
                <NavLink className={cls.link} to={`${parent}`}>
                    <p>
                        <IconGenerator icon={icon} />
                        <span>{title}</span>
                    </p>
                </NavLink>
            ))}

        </div>
    )
}

export default Section