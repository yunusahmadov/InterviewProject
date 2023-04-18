import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <header className='w-full h-20 bg-theme flex items-center justify-center relative'>
      <div className='container-section flex items-center justify-center'>
        <h1 className='font-medium text-slate-200 text-4xl'>{t('headerText')}</h1>
      </div>
      <div className='buttons absolute right-20 flex gap-4 '>
        <button onClick={() => changeLanguage('ru')} className='button-theme text-slate-100 font-bold bg-sky-400'>
          RU
        </button>
        <button onClick={() => changeLanguage('en')} className='button-theme text-slate-100 font-bold bg-sky-400'>
          ENG
        </button>
      </div>
    </header>
  );
};

export default Header;