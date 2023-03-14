import React from 'react'
import "./NotFound.css"
import NotFoundImg from "../../../assets/img/grafico.png"
import { Link } from 'react-router-dom'

const NotFoundAdmin = () => {
  return (
    <>

      <div className="Not-Found-title">
        <h1 id="error">404 NOT FOUND</h1>
        <h1 id="message">Esta página no existe. <br></br><br></br>Comprueba la URL o regresa a la página de administración de CorpoHypatia</h1>
        <img src={NotFoundImg}/>
        <Link to="/projects" id="link"><button>Regresar al inicio</button></Link>
      </div>
    </>
  )
}

export default NotFoundAdmin