import React, { useState} from 'react'
import Styles from './Search.module.css'

import Result from './../Result/Result'

const Search = () =>{
    const API_KEY = 'af12ff7baac106fb78fac80246331575'
    const [city, setCity]= useState("")
    const [data, setData]= useState(new Promise(() => {}))


    const getData = (event) =>{
        event.preventDefault()
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((otvet) => {
            setData(otvet.json())
        })
    }


    const changeHandler = (data) => {
        setCity(data.target.value)
    }




    return(
        <>
        <form className={Styles.search}>
            <input onChange={changeHandler} type="text"/>
            <a href="/" onClick={getData}>Получить </a>
        </form>
        <Result data={data}/>
        </>
    )
}


export default Search