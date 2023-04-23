import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changeStateValue } from '../reduxx/MainReducer';
import { Link, useLocation, useParams } from 'react-router-dom'
import DarkLightBtn from './Pages/PageElems/DarkLightBtn';


const FirstSection = ({ endpoint: { items }, changeLanguage }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const darkTheme=useSelector(state=>state.Data.darkTheme)
  return (
    <section className={`w-full bg transition-all duration-700 ${darkTheme? 'bg-slate-800':'bg-white '} h-[90vh] xl:h-[100vh] lg:h-auto`}>
        <DarkLightBtn/>
      <div className='container-section flex items-center justify-center mt-5'>
        <h1  className={`${darkTheme? 'text-white':'text-slate-900'} transition-all duration-700 font-medium text-2xl font-popins lg:text-xl md:text-lg sm:m-0 text-center`}>
          {t('websiteText')}
        </h1>
      </div>
      <div className='container-section flex gap-20 items-center justify-center mt-10 flex-wrap'>
        {items.map((item, index) => {
          return (
            <div key={index} className={`bg-gradient-to-b ${item.color} ${item.shadow} rounded-lg p-6 mb-4`}>
              <div className='flex justify-between items-center'>
                <h2 className={`${darkTheme? 'text-white':'text-slate-900'} transition-all duration-700 font-medium text-3xl font-popins md:text-2xl sm:m-0 text-center`}>{item.title}</h2>
                <img className='w-12 h-12 object-contain' src={item.logo} alt='' />
              </div>
              <p className={`'text-xl text-slate-900 break-words max-w-full py-5 transition-all duration-700 ${darkTheme? 'text-white':'text-slate-900'} '`}>{t("freq")}</p>
              
              <Link  target="_blank" to={`/${item.link}`}>
              <button className={`button-theme ${item.btnColor} ${item.btnShadow} text-slate-100 font-bold ${darkTheme? 'text-white':'text-slate-900'} transition-all duration-700 `}>
              {t("start")}
              </button>
              </Link>
              
            </div>
            
          );
        })}
      </div>
    </section>
  );
};

export default FirstSection;