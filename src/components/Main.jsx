import React from 'react'
import FirstSection from './FirstSection'
import { languages } from '../data/data'
const Main = ({changeLanguage}) => {
  
  return (
   <main >
    <FirstSection endpoint={languages} changeLanguage={changeLanguage}/>

   </main>
  )
}

export default Main