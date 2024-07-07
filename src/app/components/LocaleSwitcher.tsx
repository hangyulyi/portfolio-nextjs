'use client';

import { useState, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/config';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = useState<Locale>(currentLocale as Locale);

  useEffect(() => {
    setLocale(currentLocale as Locale);
  }, [currentLocale]);

//   update local state to reflect new locale
  function onChange(value: Locale) {
    startTransition(() => {
      setUserLocale(value);
      setLocale(value);
    });
  }

  const handleClick = () => {
    const nextLocale = locale === 'en' ? 'kr' : 'en';
    onChange(nextLocale);
  };

  const currentIconSrc = locale === 'en' ? '/us.svg' : '/kr.svg';

  return (
    <div >
      <button
        aria-label={t('switchLocale')}
        onClick={handleClick}
        className={`rounded-sm p-2 transition-colors hover:bg-slate-200 ${isPending ? 'pointer-events-none opacity-60' : ''}`}
      >
        <img src={currentIconSrc} alt={currentLocale === 'en' ? 'US Flag' : 'KR Flag'} className='w-6 h-6' />
      </button>
    </div>
  );
}
