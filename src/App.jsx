import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { useTranslation } from "react-i18next";

const App = () => {

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

export default App



