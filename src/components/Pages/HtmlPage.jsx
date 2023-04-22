import React from 'react'
import PageFooter from './PageElems/PageFooter'
import PageHeader from './PageElems/PageHeader'
import PageMain from './PageElems/PageMain'
import {htmlQuestions} from '../../data/data'

function HtmlPage() {
  console.log(htmlQuestions);
  return (
   <>
      <PageHeader headerText={'HTML'} color={'from-orange-400 to-orange-600'} />
      <PageMain test={htmlQuestions} langType={htmlQuestions}/>
      <PageFooter /> 
   </>

  )
}

export default HtmlPage