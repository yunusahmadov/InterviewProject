import React from 'react'
import { useTranslation } from "react-i18next";
import Header from '../Header';
import Main from '../Main';


function MainPage() {
    const {t,i18n}=useTranslation();

    const changeLanguage=(language)=>{
      i18n.changeLanguage(language)
    }
  return (
   <>
   <Header changeLanguage={changeLanguage} />
   <Main changeLanguage={changeLanguage}/>
   </>
  )
}

export default MainPage