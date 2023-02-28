import React from "react";
import "./Stylespro.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


function Form1() {
  return (
    <div className="form1 ">

        <div className="form-group ">
          <label>Nombre del Proyecto</label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe el nombre del proyecto"
            />
          </div>
          <br />

          <label>Ubicación Geográfica</label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe la Ubicación Geográfica"
            />
          </div>
          <br />

          <label>Duración</label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe la duración de proyecto"
            />
          </div>
          <br />

          <label>Presupuesto Total</label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe el presupuesto del proyecto"
            />
          </div>
          <br />

          <label>Sector de intervención</label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              placeholder="Escribe el sector de proyecto"
            />
          </div>
          <br />

          <label>Imagen del proyecto</label>
          <div className="col-sm-12">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              placeholder="Sube imagen de proyecto"
            />
          </div>
          <div className="boton-seguir1 btn-next">
            <button>
              Siguiente
              <BsFillArrowRightCircleFill className="icono-seguir" />
            </button>
          </div>
        </div>
        </div>
  );
}

export default Form1;
