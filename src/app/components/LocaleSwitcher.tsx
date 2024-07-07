'use client';

import { useState, useEffect, useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import USFlag from '/us.svg';
import KRFlag from '/kr.svg';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/config';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [locale, setLocale] = useState(currentLocale);

  useEffect(() => {
    setLocale(currentLocale);
  }, [currentLocale]);

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

  const currentIcon = locale === 'en' ? <USFlag /> : <KRFlag />;

  return (
    <div className="relative">
      <button
        aria-label={t('switchLocale')}
        onClick={handleClick}
        className={`rounded-sm p-2 transition-colors hover:bg-slate-200 ${isPending ? 'pointer-events-none opacity-60' : ''}`}
      >
        {currentIcon}
      </button>
    </div>
  );
}
