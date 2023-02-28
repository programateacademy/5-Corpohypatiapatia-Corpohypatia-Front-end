import React from "react";
import "./Stylespro.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


function Form2() {
  return (
    <div className="form2">
      <form>
        <div className="form-group">
          <label>Problematica</label>
          <div className="col-sm-12">
            <textarea
              className="form-control"
              rows="1"
              placeholder="Escribre problematica del proyecto"
            ></textarea>
          </div>
          <br />

          <label>Beneficios</label>
          <div className="col-sm-12">
            <textarea
              className="form-control"
              rows="1"
              placeholder="Escribe beneficios del proyecto"
            ></textarea>
          </div>
          <br />

          <label>Ejecución de Proyecto</label>
          <div className="col-sm-12">
            <textarea
              className="form-control"
              rows="1"
              placeholder="Escribe resumen de proyecto"
            ></textarea>
          </div>
          <br />

          <label>Marco Logíco</label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe resumen metodologíco"
            />
          </div>
          <br />

          <label>Objetivo General</label>
          <div className="col-sm-12">
            <textarea
              className="form-control"
              rows="1"
              placeholder="Escribe el objetivo general del proyecto"
            ></textarea>
            <br />

            <label>Objetivos Especificos</label>
            <div className="col-sm-12">
              <textarea
                className="form-control"
                rows="1"
                placeholder="Escribe los objetivos especificos"
              ></textarea>
            </div>
          </div>
          <br />
          <div className="boton-seguir2">
            <button className="boton-atras">
              <BsFillArrowLeftCircleFill className="icono-atras" />
              atrás
            </button>
            <button>
              Siguiente
              <BsFillArrowRightCircleFill className="icono-seguir" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form2;
