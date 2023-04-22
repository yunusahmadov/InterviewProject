import React from 'react'
import PageFooter from './PageElems/PageFooter'
import PageHeader from './PageElems/PageHeader'
import PageMain from './PageElems/PageMain'
import {cssQuestions} from '../../data/data'

function CssPage() {
  return (
    <>
    <PageHeader headerText={'CSS'} color={'from-sky-300 to-sky-400'} />
    <PageMain test={cssQuestions} langType={cssQuestions}/>
    <PageFooter/> 
 </>
  )
}

export default CssPage