import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionElement from './AccordionElement';
import '../../../index.css';
import i18next from 'i18next';
import enQuest from '../../../../public/locales/en.js';
import ruQuest from '../../../../public/locales/ru.js';
import { htmlQuestions } from '../../../data/data';
import SelectItem from './SelectItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import DarkLightBtn from './DarkLightBtn';
import { changeStateValue } from '../../../reduxx/MainReducer';

function PageMain({ test:{questions},langType,description1,description2} ) {
  const darkTheme=useSelector(state=>state.Data.darkTheme)
  const language=useSelector(state=>state.Data.language)
  const dispatch=useDispatch()

  // const [lang,setLang]=useState('')
    const [aa, setLanguage] = useState('');

  useEffect(() => {
    const getLang = localStorage.getItem('lang');
    setLanguage(getLang);
  }, [])
  function test(language) {

    // }
    // if (language ==='ru') {
    //   dispatch(changeStateValue({ name: 'language', value: 'ru' }));
    //   localStorage.setItem('lang', language);
    // }else if(language === 'en'){
    //   dispatch(changeStateValue({ name: 'language', value: 'en' }));
    //   localStorage.setItem('lang', language);
    // }
  }
  

  i18next.init({
    lng: aa, 
    resources: {
      en: {
        translation: enQuest,
      },
      ru: {
        translation: ruQuest,
      },
    },
  });
  return (
    <div className={`w-full h-auto pb-5 transition-all duration-700 ${darkTheme?'bg-slate-800':'bg-slate-200'}`}>
<div className='w-full flex items-center justify-between px-5'>
<div className='absolute top-1 right-5'>
{/* <FormControl className='w-32  border-white ' >
    <InputLabel className="text-slate-100" id="demo-simple-select-label ">Languages</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      value={aa}
      onChange={(e)=>test(e.target.value)}
    >
      <MenuItem className="text-slate-100 bg-sky-400" value={'ru'}>Ru</MenuItem>
      <MenuItem value={'en'}>En</MenuItem>
    </Select>
</FormControl> */}
</div>

</div>
      <div className="main-page md:w-11/12   ">
        
        {
          langType.questions.map((question) => (
            <div key={question.title} className='mt-2  w-full border-0 '>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header className={`${darkTheme ? 'text-white' : 'text-white'}`}>
                  {/* <Card.Header className='bg-red-900'> */}
                  <h3 className={`'xl:text-xl lg:text-lg mb-0 ' ${darkTheme ? 'text-slate-100' : 'text-slate-900'}`}>{i18next.t(question.title)} </h3>
              <div className='flex gap-2'>
              {
                    question.level=='junior'?
                  <h4 className='mb-0 xl:text-lg lg:text-md text-green-500'>{question.level}</h4>:
                  question.level=='middle'?
                  <h4 className='mb-0 xl:text-lg lg:text-md text-yellow-400'>{question.level}</h4>:
                  question.level=='senior'?
                  <h4 className='mb-0 xl:text-lg lg:text-md text-red-700'>{question.level}</h4>:null
                  }
                    <AccordionElement  eventKey="1"  >
          
                    </AccordionElement>
              </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className={`${darkTheme ? 'bg-slate-800' : 'bg-slate-300'}`}>
                      {/* Если не использовать свойство whitespace-pre-wrap,то переносы /n работать не будут */}
                          <div className={`flex flex-col items-start whitespace-pre-wrap`}>
                          <p className={`font-medium ${darkTheme ? 'text-slate-100' : 'text-slate-900'}`}>{i18next.t(question?.answer)}</p>

                          {/* Description if need */}
                          {
                          question.description1?
                          <h3 className={`description-style ${darkTheme ? 'text-slate-100' : 'text-slate-900'}`}>1){i18next.t(question.description1)}</h3>:null
                          }
                          {
                            question.img?
                            <img className='w-1/2 rounded-2xl h-auto mt-5 m-auto' src={question.img} alt={`${question?.img}`} />:null
                          }
                               {
                          question.description2?
                          <h3 className={`description-style mt-5 ${darkTheme ? 'text-slate-100' : 'text-slate-900'}`}>2){i18next.t(question.description2)}</h3>:null
                          }
                          {
                            question.img2?
                            <img className='w-1/2 h-auto pt-10 m-auto' src={question.img2} alt={`${question?.img2}`} />:null
                          }
                          </div>
                    </Card.Body>
                    
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PageMain