import React from 'react'
import Styles from './App.module.css'
import Search from './components/Search/Search'

const App = () =>{
  return (
    <div className={Styles.app}>
      <div  className={Styles.heading}>
        <h1>Weather App</h1>
        <p>Find a weather in any city</p>
      </div>
      <div className={Styles.main}>
        <Search />
      </div>
    </div>
  )
}

export default App