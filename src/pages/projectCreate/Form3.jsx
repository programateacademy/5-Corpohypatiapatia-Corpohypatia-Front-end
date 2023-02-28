import React from "react";
import "./Stylespro.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


function Form3() {
  return (
    <div className="form3">
      <form>
        <div className="form-group">
          <label>Principales resultados de indicadores</label>
          <div className="col-sm-12">
            <textarea className="form-control" rows="1" placeholder=""></textarea>
          </div>
          <br />

          <label>Indicadores</label>
          <div className="col-sm-12">
            <textarea className="form-control" rows="1" placeholder=""></textarea>
          </div>
          <br />

          <label>Actividadades asociadas a los indicadores</label>
          <div className="col-sm-12">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
            ></textarea>
          </div>
          <br />

          <label>Experiencia y capacidad</label>
          <div className="col-sm-12">
            <textarea className="form-control" rows="1" placeholder=""></textarea>
          </div>
          <br />

          <label>Sostenibilidad y estrategia de salida</label>
          <div className="col-sm-12">
            <textarea className="form-control" rows="1" placeholder=""></textarea>
            <br />

            <label>Estrategia de escape</label>
            <div className="col-sm-12">
              <textarea className="form-control" rows="1" placeholder=""></textarea>
            </div>
          </div>
          <br />
          <div className="boton-Crear">
            <button className="boton-atras">
              <BsFillArrowLeftCircleFill className="icono-atras" />
              atrás
            </button>
            <button className="botons-crear">Crear proyecto</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form3;
