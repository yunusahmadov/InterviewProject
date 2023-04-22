import React from 'react'
import PageFooter from './PageElems/PageFooter'
import PageHeader from './PageElems/PageHeader'
import PageMain from './PageElems/PageMain'
import {JsQuestions} from '../../data/data'

function JsPage() {
  return (
    <>
    <PageHeader headerText={'Javascript'} color={'from-orange-400 to-orange-600'}/>
    <PageMain test={JsQuestions} langType={JsQuestions}/>
    <PageFooter /> 
 </>

  )
}

export default JsPage  