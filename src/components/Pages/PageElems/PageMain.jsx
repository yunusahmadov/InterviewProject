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
    lng: 'en', 
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
    <div className="w-full h-auto">
      <div className="main-page ">
        {
          htmlQuestions.questions.map((question) => (
            <div key={question.title}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                  <h3>{i18next.t(question.title)}</h3>
                    <AccordionElement eventKey="0">Open Answer</AccordionElement>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>{i18next.t(question.answer)}</Card.Body>
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