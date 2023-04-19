import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionElement from './AccordionElement';
import '../../../index.css';
import i18next from 'i18next';
import enTranslation from '../../../../public/locales/en.json';
import ruTranslation from '../../../../public/locales/ru.json';
import { htmlQuestions } from '../../../data/data';

function PageMain({ test:{questions}} ) {
  console.log(questions.title);
  i18next.init({
    lng: 'ru', // выберите язык, который будет использоваться по умолчанию
    resources: {
      en: {
        translation: enTranslation, // объект с переводами для английского языка
      },
      ru: {
        translation: ruTranslation, // объект с переводами для русского языка
      },
    },
  });
  return (
    <div className="w-full h-auto">
      <div className="main-page ">
        {/* {
          questions.map((item,index)=>{
            return(
              <div key={index}>
                <Accordion defaultActiveKey="0" alwaysOpen>
          <Card>
            <Card.Header>
              <p>{item.title}</p>
              <AccordionElement eventKey="0">Click me!</AccordionElement>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{item.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
              </div>
            )
          })
        } */
        htmlQuestions.questions.map((question) => (
          <div key={question.title}>
            <h3>{i18next.t(question.title)}</h3>
            <p>{i18next.t(question.answer)}</p>
          </div>
        ))
        }

        
      </div>
    </div>
  );
}

export default PageMain