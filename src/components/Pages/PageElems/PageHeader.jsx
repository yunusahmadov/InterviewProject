import React from 'react'

function PageHeader({color,headerText}) {
  return (
   <header className={`header-style bg-gradient-to-b ${color}`}>
    {headerText}
   </header>
  )
}

export default PageHeader