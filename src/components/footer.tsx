import React from 'react';
import { useConfig } from '../context/ConfigContext';

export default function Footer() {
    const { appVersion } = useConfig();

    if (!import.meta.env.VITE_ENVIRONMENT) {
        return <Logo />;
    }

    console.log(import.meta.env);

    return (
        <div className="flex justify-between items-center mt-4">
            <div className="w-40"></div>
            <Logo />
            <div className="text-center text-sm text-gray-500 bg-white p-2 rounded-lg shadow-md">
                ENV: {import.meta.env.VITE_ENVIRONMENT} - VER: {appVersion}
            </div>
        </div>
  )
}

function Logo() {
    return <img src={`${import.meta.env.VITE_IMG_HOST}logo-dark-vertical-1.png`} alt="Logo projektu Opanuj Frontend" className="w-32 mx-auto" />;
}
