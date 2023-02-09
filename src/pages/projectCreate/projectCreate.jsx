import React from "react";
import "./Stylespro.css";
import { BsPlusCircleFill } from "react-icons/bs";

function ProjectCreate() {
  return (
    <div className="Proyect">
        <form>
        <div class="form-group">
          <label>Nombre del Proyecto</label>
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              placeholder="Digite el nombre del proyecto"
            />
          </div>
          <br />

          <label>Descripción</label>
          <div class="col-sm-12">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="1"
              placeholder="Describe tu proyecto"
            ></textarea>
          </div>
          <br />

          <div className="">
            <label>Objetivo General</label>
            <div class="col-sm-12">
              <textarea
                class="form-control"
                rows="1"
                placeholder="Escribe el objetivo general del proyecto"
              ></textarea>
            </div>
            <br />

            <label>Objetivos Especificos</label>
            <div class="col-sm-12">
              <input
                type="text"
                class="form-control"
                placeholder="Escribe objetivos especificos del proyecto"
              />
            </div>
          </div>
          <br />

          <label>Precio</label>
          <div class="col-sm-12">
            <input
              type="number"
              class="form-control"
              placeholder="valor de proyecto"
            />
          </div>
          <br />
          <label>Indicador</label>
          <div class="col-sm-12">
            <input type="text" class="form-control" placeholder="Indicador" />
          </div>

          <br />
          <div className="parrafo-v">
            <p>
              En este espacio puedes subir sus documentos PDF o links para
              visualizar su proyecto.
            </p>
          </div>

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Archivo
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                URL
              </button>
            </li>
          </ul>

          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="contenedor">
                <div class="drag-drop">
                  <input
                    type="file"
                    multiple="multiple"
                    enctype="multipart/form-data"
                    accept=".pdf"
                  />
                  <span class="fa-stack fa-2x">
                    <i class="fa fa-cloud fa-stack-2x bottom pulsating"></i>
                    <i class="fa fa-circle fa-stack-1x top medium"></i>
                    <i class="fa fa-arrow-circle-up fa-stack-1x top"></i>
                  </span>
                  <span class="desc">Pulse aquí para añadir archivos</span>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab">
              <div className="contenedor">
                <div class="url col-11">
                  <input
                    type="url/"
                    class="form-control"
                    placeholder="Pega la URL aqui..."
                  />
                  <BsPlusCircleFill className="icon-mas" />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="boton-crear">
            <button type="submit/" class="btn-color">
              Crear Proyecto
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProjectCreate;
