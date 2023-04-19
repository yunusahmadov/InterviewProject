import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Link, useLocation, useParams } from 'react-router-dom'
const FirstSection = ({ endpoint: { items }, changeLanguage }) => {
  const { t } = useTranslation();
  const location = useLocation();


  
  return (
    <section className='w-full'>
      <div className='container-section flex items-center justify-center mt-5'>
        <h1 className='font-medium text-2xl font-popins lg:text-xl md:text-lg sm:m-0 text-center text-slate-600'>
          {t('websiteText')}
        </h1>
      </div>
      <div className='container-section flex gap-20 items-center justify-center mt-10 flex-wrap'>
        {items.map((item, index) => {
          return (
            <div key={index} className={`bg-gradient-to-b ${item.color} ${item.shadow} rounded-lg p-6 mb-4`}>
              <div className='flex justify-between items-center text-slate-100'>
                <h2 className='text-2xl font-bold'>{item.title}</h2>
                <img className='w-12 h-12 object-contain' src={item.logo} alt='' />
              </div>
              <p className='text-xl text-slate-900 break-words max-w-full py-5 '>{t("freq")}</p>
              
              <Link target="_blank" to={`/${item.link}`}>
              <button   className={`button-theme ${item.btnColor} ${item.btnShadow}`}>
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