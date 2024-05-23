import { useState } from 'react'
import './App.scss'
import Button from './components/button/button.component.jsx'
import CosplayList from './components/cosplayList/cosplayList.component.jsx'



const App = () => {


  return (
    <>
      <h1>Cosplay Manager</h1>
      <CosplayList/>
    </>
  )
}

export default App
