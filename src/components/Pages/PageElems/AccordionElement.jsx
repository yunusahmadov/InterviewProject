import React, { useState } from 'react'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useTranslation } from 'react-i18next';

import { BsChevronCompactDown,BsChevronUp } from 'react-icons/bs';
function AccordionElement({ children, eventKey }) {
const [arrow,setArrow]=useState(true)

    const decoratedOnClick = useAccordionButton(eventKey, () =>
   setArrow(!arrow),
  );
  console.log(arrow);
  const { t } = useTranslation();
  return (
    <button 
      className='text-xl p-1 rounded-md ' 
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
     {
      // arrow?<BsChevronCompactDown/>:<BsChevronUp/>
      arrow?<BsChevronCompactDown className='transition-all duration-200'/>:<BsChevronCompactDown className='transition-all duration-200 rotate-180'/>

     }
    </button>
  );
}

export default AccordionElement   