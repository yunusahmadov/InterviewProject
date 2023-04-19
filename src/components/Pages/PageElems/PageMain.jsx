import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import AccordionElement from './AccordionElement';
import '../../../index.css';

function PageMain({ test:{questions}} ) {
  console.log(questions.title);
  return (
    <div className="w-full h-auto">
      <div className="main-page ">
        {
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
        }
      </div>
    </div>
  );
}

export default PageMain