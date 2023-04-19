import React from 'react'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
function AccordionElement({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button 
        
      type="button"
      style={{ backgroundColor: 'grey' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default AccordionElement   