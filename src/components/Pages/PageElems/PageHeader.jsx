import React from 'react'
import { useSelector } from 'react-redux'
import DarkLightBtn from './DarkLightBtn'

function PageHeader({color,headerText}) {
  const darkTheme=useSelector(state=>state.Data.darkTheme)

  return (
   <header className={`header-style bg-gradient-to-b flex justify-between ${color} text-2xl ${darkTheme? 'text-white':'text-slate-900 transition-all duration-700'}`}>
      <div className='header-inner-style'>
      {headerText}
  <DarkLightBtn visibility={'hidden'}/>
      </div>

   </header>
  )
}

export default PageHeader