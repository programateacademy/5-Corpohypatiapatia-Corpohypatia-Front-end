import React from "react";
import "./Stylespro.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


function Form1() {
  return (
    <div className="form1">

        <div class="form-group">
          <label>Nombre del Proyecto</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              placeholder="Escribe el nombre del proyecto"
            />
          </div>
          <br />

          <label>Ubicación Geográfica</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              placeholder="Escribe la Ubicación Geográfica"
            />
          </div>
          <br />

          <label>Duración</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              placeholder="Escribe la duración de proyecto"
            />
          </div>
          <br />

          <label>Presupuesto Total</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              placeholder="Escribe el presupuesto del proyecto"
            />
          </div>
          <br />

          <label>Sector de intervención</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              placeholder="Escribe el sector de proyecto"
            />
          </div>
          <br />

          <label>Imagen del proyecto</label>
          <div class="col-sm-12">
            <input
              type="file"
              accept="image/*"
              class="form-control"
              placeholder="Sube imagen de proyecto"
            />
          </div>
          <div className="boton-seguir1">
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
