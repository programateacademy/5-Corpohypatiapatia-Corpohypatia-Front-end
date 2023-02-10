import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../service/api";

import ReadMore from "./ReadMore";
import "./StylesDetails.css";

function ProjectDetails() {

    const [project, setProject] = useState([]);

    const { id } = useParams();

    const loadProjectsDetails = async () => {
      const response = await getProject(id);
      setProject(response.data);
    };

    useEffect(() => {
      loadProjectsDetails();
    }, []);

    // console.log(project.problematic_summary)

    // const text = project.problematic_summary
    // console.log(`texto ${text}`)
    
    return (
        <div className="contenedor-Detalle">
        <div className="card-foto">
          
          <img className="imagen" src={project.imagePath} alt="Imagen de proyecto" />
          <div className="cards">
            <p className="texto-v">
              <p>Proyecto:</p>
              {project.project_title}
            </p>
            <p className="texto-v">
              <p>Sector:</p>Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="texto-v">
              <p>Sector:</p>Lorem Ipsum is simply dummy text of the printing
            </p>
  
            <div className="boton-editar">
              <button>Editar</button>
            </div>
          </div>
          <div className="avance">
            <div className="elemento">
              <button>Regresar</button>
            </div>
  
            <div className="elementos">
              <p>Avance</p>
            </div>
          </div>
        </div>
  
        <div class="margen">
          <div class="segun-margen">
            {/* card sencilla indicador*/}
            <div class="card">
              <div class="cards-indicador">
                <p class="card-text">
                Lorem Ipsum is simply dummy text
                </p>
                <div className="indicador">
                  <p>Avance</p>
                </div>
              </div>
            </div>
  
            {/* card sencilla fechas*/}
  
            <div class="card">
              <div class="card-body">
                <div className="contenedor-fechas">
                  <div className="fechas">
                    <p className="bold">Fecha de corte:</p>
                    <p>30/03/3030</p>
                  </div>
                  <div className="fechas">
                    <p className="bold">Fecha de actualizacion:</p>
                    <p>30/03/3030</p>
                  </div>
                  <div className="fechas">
                    <p className="bold">Diaz de rezago:</p>
                    <p>30/03/3030</p>
                  </div>
                  <div className="fechas">
                    <p className="bold">Periocidad:</p>
                    <p>30/03/3030</p>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="card">
              <div className="card-header">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="resumen-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#resumen"
                      type="button"
                      role="tab"
                      aria-controls="resumen"
                      aria-selected="true"
                    >
                      Resumen
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="resultados-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#resultados"
                      type="button"
                      role="tab"
                      aria-controls="resultados"
                      aria-selected="false"
                    >
                      Resultados
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="ficha-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ficha"
                      type="button"
                      role="tab"
                      aria-controls="ficha"
                      aria-selected="false"
                    >
                      Ficha Tecnica
                    </button>
                  </li>
  
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="Documento-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Documento"
                      type="button"
                      role="tab"
                      aria-controls="Documento"
                      aria-selected="false"
                    >
                      Documentos asociados
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="resumen"
                    role="tabpanel"
                    aria-labelledby="resumen-tab"
                  >
                    <div className="card-body">
                      <h5 className="card-title">Descripción del proyecto</h5>
                      <hr />
                      <p className="card-text">
                        {/* <ReadMore text={project.problematic_summary}/> */}
                        {/* {project.problematic_summary} */}
                        {/* Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem
                        Ipsum. */}
                      </p>
  
                      <div className="texto-fecha">
                        <p>Fecha de corte:</p>
                        <p>Fecha de actualizacion:</p>
                      </div>
                    </div>
  
                    <div className="card-body">
                      <h5 className="card-title">
                        Comportamiento anual del indicador
                      </h5>
                      <hr />
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="resultados"
                    role="tabpanel"
                    aria-labelledby="resultados-tab"
                  >
                    Holii
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ficha"
                    role="tabpanel"
                    aria-labelledby="ficha-tab"
                  >
                    Welcomesss
                  </div>
                  <div
                    class="tab-pane fade"
                    id="Documento"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    Welcomes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="boton-export">Exportar</button>
        </div>
      </div>
    );
}

export default ProjectDetails;