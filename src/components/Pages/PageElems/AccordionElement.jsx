import React from 'react'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
function AccordionElement({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button 
      className='bg-green-400 p-1 rounded-md' 
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default AccordionElement   