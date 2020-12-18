import React, { useState } from 'react'
import Styles from './Result.module.css'

const Result = ({data}) => {
     
    const [result, setResult] = useState({
        main: '',
        weather: [''],
        wind: ''
    })

    data.then(otvet => {
        setResult(otvet)
    })

    console.log(result)

    let date = new Date()
    return (
        <div className={Styles.result}>
            <ul className={result.main !== '' ? Styles.style : Styles.dn}>
           <p className={Styles.time}>{date.getFullYear()},{date.getHours()+ ":" + date.getMinutes() + ""}</p>
              <li ><p>Температура</p>{result.main.temp} {result.main !== '' ? 'C*' : ''}</li>
              <li><p>Влажность</p>{result.main.humidity} {result.main !== '' ? '%' : ''}</li>
              <li ><p>Давление</p>{result.main.claspressure} {result.main !== '' ? 'Pa' : ''}</li>
              <li ><p>Ветренность</p>{result.wind.speed} {result.main !== '' ? 'm/s' : ''}, {result.wind.deg} {result.main !== '' ? 'dg' : ''}</li>
              <li ><p>Погода</p>{result.weather[0].description}</li>
            </ul>
        </div>
    )
}

export default Result