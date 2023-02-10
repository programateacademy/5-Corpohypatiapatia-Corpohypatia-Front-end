import React from "react";
import "./Stylespro.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


function Form3() {
  return (
    <div className="form3">
      <form>
        <div class="form-group">
          <label>Principales resultados de indicadores</label>
          <div class="col-sm-12">
            <textarea class="form-control" rows="1" placeholder=""></textarea>
          </div>
          <br />

          <label>Indicadores</label>
          <div class="col-sm-12">
            <textarea class="form-control" rows="1" placeholder=""></textarea>
          </div>
          <br />

          <label>Actividadades asociadas a los indicadores</label>
          <div class="col-sm-12">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder=""
            ></textarea>
          </div>
          <br />

          <label>Experiencia y capacidad</label>
          <div class="col-sm-12">
            <textarea class="form-control" rows="1" placeholder=""></textarea>
          </div>
          <br />

          <label>Sostenibilidad y estrategia de salida</label>
          <div class="col-sm-12">
            <textarea class="form-control" rows="1" placeholder=""></textarea>
            <br />

            <label>Estrategia de escape</label>
            <div class="col-sm-12">
              <textarea class="form-control" rows="1" placeholder=""></textarea>
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
