import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionElement from './AccordionElement';
import '../../../index.css';
import i18next from 'i18next';
import enTranslation from '../../../../public/locales/en.json';
import ruTranslation from '../../../../public/locales/ru.json';
import { htmlQuestions } from '../../../data/data';
import SelectItem from './SelectItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function PageMain({ test:{questions}} ) {
  const [lang,setLang]=useState('')
  useEffect(() => {
    setLang('ru')
  }, [])
  function test(lang) {
    if (lang === 'ru') {
      setLang('ru')
    } else if (lang === 'en') {
      setLang('en')

    }
  }

  i18next.init({
    lng: lang, 
    resources: {
      en: {
        translation: enTranslation, 
      },
      ru: {
        translation: ruTranslation, 
      },
    },
  });
  return (
    <div className="w-full h-auto mt-5">
<div className='absolute right-0 top-[70px]'>
<FormControl className='w-32  border-white ' >
    <InputLabel className="text-slate-100" id="demo-simple-select-label ">Languages</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      value={lang}
      onChange={(e)=>test(e.target.value)}
    >
      <MenuItem className="text-slate-100 bg-sky-400" value={'ru'}>Ru</MenuItem>
      <MenuItem value={'en'}>En</MenuItem>
    </Select>
  </FormControl>
</div>
      <div className="main-page md:w-11/12   ">
        
        {
          htmlQuestions.questions.map((question) => (
            <div key={question.title} className='mt-2  w-full'>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                  <h3 className='xl:text-xl lg:text-lg'>{i18next.t(question.title)}</h3>
                    <AccordionElement eventKey="1" >
                     
                    </AccordionElement>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      {i18next.t(question?.answer)}
                      <img src={question.img} alt="" />
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