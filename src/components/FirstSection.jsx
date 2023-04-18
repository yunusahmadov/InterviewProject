import React from 'react';
import { useTranslation } from 'react-i18next';
const FirstSection = ({ endpoint: { items }, changeLanguage }) => {
  const { t } = useTranslation();

  return (
    <section className='w-full'>
      <div className='container-section flex items-center justify-center mt-5'>
        <h1 className='font-medium text-2xl font-popins lg:text-xl md:text-lg sm:m-0 text-center'>
          {t('headerText')}
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
              <p className='text-lg'>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FirstSection;