import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();

  function test(lang) {
    if (lang === 'ru') {
      changeLanguage('ru')
    } else if (lang === 'en') {
      changeLanguage('en')
    }
  }
  return (
    <header className="w-full h-20 bg-theme flex items-center justify-center relative">
      <div className="container-section flex items-center justify-center">
        <h1 className="font-medium text-slate-200 text-4xl">
          {t("headerText")}
        </h1>
      </div>
      <div className="buttons absolute right-20 flex gap-4 items-center">
        {/* <button onClick={() => changeLanguage('ru')} className='button-theme text-slate-100 font-bold bg-sky-400'>
          RU
        </button>
        <button onClick={() => changeLanguage('en')} className='button-theme text-slate-100 font-bold bg-sky-400'>
          ENG
        </button> */}
        <label for="language-select" class="text-slate-100 font-bold">
          Select Language:
        </label>
        <select
          id="language-select"
          class="px-4 py-1 bg-sky-400 outline-none"
          onChange={(e)=>test(e.target.value)}
        >
          <option value="ru">RU</option>
          <option value="en">ENG</option>
        </select>
      </div>
    </header>
  );
};

export default Header;