import React, { useEffect } from 'react'
import { ColorContants, setLocatStoreage } from '../../../contants/website';

const WebsiteProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        (Object.keys(ColorContants) as (keyof typeof ColorContants)[]).forEach(
            (key) => {
                document.documentElement.style.setProperty(
                    "--" + key,
                    ColorContants[key]
                );
            }
        );

        if (setLocatStoreage) {
            localStorage.setItem('cardAdd', JSON.stringify(setLocatStoreage))
        }


    }, []);



    return <>
        {children}
    </>
}

export default WebsiteProvider