'use client';

import { useState } from 'react';
import { useTransition } from 'react';
import { Locale } from '@/config';
import { setUserLocale } from '@/services/locale'

import USFlag from '/us.svg';
import KRFlag from '/kr.svg';

type Props = {
    defaultValue: string;
    items: Array<{ value: string; label: string }>;
    label: string;
};

export default function LocaleSwitcherSelect({
    defaultValue,
    items,
    label,
}: Props) {
    const [isPending, startTransition] = useTransition();
    const [currentLocale, setCurrentLocale] = useState<Locale>(defaultValue as Locale);
    
    function onChange(value: Locale) {
        startTransition(() => {
            setUserLocale(value);
            setCurrentLocale(value);
        })
    }

    const handleClick = () => {
        const nextLocale = currentLocale === 'en' ? 'kr' : 'en';
        onChange(nextLocale);
    }

    const currentIcon = currentLocale === 'en' ? <USFlag /> : <KRFlag />;

    return (
        <div className='relative'>
            <button
                aria-label={label}
                onClick={handleClick}
                className={`rounded-md p-2`}>
                { currentIcon }
            </button>
        </div>
    )
}