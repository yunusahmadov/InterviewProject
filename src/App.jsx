import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import MainPage from './components/Pages/MainPage'
import HtmlPage from './components/Pages/HtmlPage'
import CssPage from './components/Pages/CssPage'
import JsPage from './components/Pages/JsPage'

const App = () => {



  return (
<BrowserRouter>
<Routes>
      <Route path='/' element={<MainPage/>}/>

      <Route path='/htmlpage' element={<HtmlPage/>}/>
      <Route path='/cssPage' element={<CssPage/>}/>
      <Route path='/jsPage' element={<JsPage/>}/>

</Routes>
</BrowserRouter>
  )
}

export default App



