import React from 'react';
import { useTranslation } from 'react-i18next';
import SelectItem from './Pages/PageElems/SelectItem';



const Header = ({ changeLanguage }) => {
  const { t } = useTranslation();
  return (
    <header className="w-full h-20 bg-theme flex items-center justify-center relative sm:gap-5">
      <div className="container-section flex items-center justify-center">
        <h1 className="font-medium text-slate-200 text-4xl lg:text-3xl md:text-2xl xsm:text-xl pl-2">
          {t("headerText")}
        </h1>
      </div>
      <div className="buttons absolute right-20 w-40 lg:right-10 lg:w-28 md:w-24 md:right-5 sm:static pr-5 "> 
      <SelectItem changeLanguage={changeLanguage}/>
      </div>
    </header>
  );
};

export default Header;