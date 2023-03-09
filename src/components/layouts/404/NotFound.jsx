import React from 'react'
import "./NotFound.css"
import NotFoundImg from "../../../assets/img/grafico.png"
import Header from '../header/Header'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Header/>
      <div className="Not-Found-title">
        <h1 id="error">404 NOT FOUND</h1>
        <h1 id="message">EY!! La pagina a la que intentas acceder al parecer no existe</h1>
        <img src={NotFoundImg}/>
        <Link to="/" id="link"><button>Regresar al inicio</button></Link>
      </div>
    </>
  )
}

export default NotFound