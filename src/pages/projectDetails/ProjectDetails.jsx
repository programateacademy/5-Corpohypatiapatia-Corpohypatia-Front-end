import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject, editProject } from "../../service/api";
import { Link } from "react-router-dom";

// import ReadMore from "./ReadMore";
import "./StylesDetails.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsBoxArrowUp } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import Checklist from "./Checklist";
import { Switch, FormControlLabel } from '@mui/material';


function ProjectDetails() {

  // const [project, setProject] = useState(null);

  // const { id } = useParams();

  // const loadProjectsDetails = async () => {
  //   const response = await getProject(id);
  //   setProject(response.data);
  // };

  // console.log(project)

  // useEffect(() => {
  //   loadProjectsDetails();
  // }, [project]);

  const [project, setProject] = useState(null);
  const [isEnabled, setIsEnabled] = useState(project?.enabled);
  const { id } = useParams();

  const loadProjectDetails = async () => {
    const response = await getProject(id);
    setProject(response.data);
  };

  useEffect(() => {
    loadProjectDetails();
  }, [id, project]);

  useEffect(() => {
    const updateProject = async () => {
      try {
        await editProject({ enabled: isEnabled }, id);
      } catch (error) {
        console.error(error);
      }
    };

    updateProject();
  }, [isEnabled, id]);


  if (!project) {
    return (
      <>
        <div id="container-loader">
          <label class="loading-title">Cargando información de proyecto ...</label>
          <span class="loading-circle sp1">
            <span class="loading-circle sp2">
              <span class="loading-circle sp3"></span>
            </span>
          </span>
        </div>
      </>
    );
  }

  return (


    <div className="contenedor-Detalle">

      <FormControlLabel
        control={
          <Switch
            checked={isEnabled}
            onChange={(event) => setIsEnabled(event.target.checked)}
          />
        }
        label="Habilitado"
      />

      <div className="card-foto w-75 mx-auto">
        <img className="imagen" src={project.imagePath} alt="Card cap" />
        <div className="reverse">
          <div className="cards">
            <div className="texto-v">
              <p className="texto-bold">
                Proyecto: {project.project_title}
              </p>
              <p className="texto-bold">
                Entidad: Corporación para la Equidad, la Democracia y el Buen Vivir – Corpohypatia.
              </p>
              <p className="texto-bold">
                Estrategia de bienestar emocional de niños y niñas de 5 a 12 años en el municipio de Bucaramanga, Santander.
              </p>
            </div>

            <Link to={`/admin-projects/edit/${project._id}`} className="button edit">
              <button className="boton-editar">
                Editar <RiFileEditLine className="icon-edit" />
              </button>
            </Link>

          </div>

          <div className="elemento-avance">
            {/* <button className="Boton-regresar">
              Regresar <RiArrowGoBackFill className="icon-regreso" />
            </button> */}

            <div className="avance">
              <p>Avance</p>
              <div className="porcentaje-avance">
                <p>{project.project_percentage}%</p>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div class="margen w-75 mx-auto">
        <div class="segun-margen">
          {/* card sencilla indicador*/}
          <h2 className="title-margin">Indicadores:</h2>
          <Checklist results={project.results} />

          <div class="card ">
            <div class="card-body">
              <div className="contenedor-fechas">
                <div className="fechas">
                  <p className="bold">Fecha de actualizacion:</p>
                  <p>30/03/3030</p>
                </div>
                <div className="fechas">
                  <p className="bold">Duración:</p>
                  <p>{project.project_duration}</p>
                </div>
                <div className="fechas">
                  <p className="bold">Presupuesto:</p>
                  <p>{project.project_budget}</p>
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
                    Objetivos
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
                    Experiencia y capacidad
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
                    Sostenibilidad
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
                      {project.problematic_summary}
                    </p><br />
                    <h5 className="card-title">Beneficiarios / población diana</h5>
                    <hr />
                    {project.beneficiaries}
                    <br /><br />
                    <h5 className="card-title">Resumen ejecutivo</h5>
                    <hr />
                    {project.executive_summary}
                    <br /><br />
                    <h5 className="card-title">Alineación del proyecto con políticas públicas y prioridades locales, regionales, estatales y/o Internacionales</h5>
                    <hr />
                    {project.alignment}
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="resultados"
                  role="tabpanel"
                  aria-labelledby="resultados-tab"
                >
                  <div className="card-body">
                    {project.methodology_summary} <br /> <br />
                    <h5 className="card-title">Objetivo general</h5>
                    <hr />
                    {project.general_objetive} <br /> <br />

                    <h5 className="card-title">Objetivos específicos</h5>
                    <hr />
                    <ul>
                      {project.specific_objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="ficha"
                  role="tabpanel"
                  aria-labelledby="ficha-tab"
                ><div className="card-body">
                    <h5 className="card-title">Experiencia y capacidad</h5>
                    <hr />
                    {project.experience}</div>
                </div>
                <div
                  class="tab-pane fade"
                  id="Documento"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                ><div className="card-body">
                    <h5 className="card-title">Identificación de elementos que aseguren la sostenibilidad económica, social y ambiental del Proyecto</h5>
                    <hr />
                    {project.sustainability}<br /><br />

                    <h5 className="card-title">Estrategia de salida al finalizar el proyecto</h5>
                    <hr />
                    {project.exit_strategy}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="boton-export">
          Exportar <BsBoxArrowUp className="icon-Export" />{" "}
        </button>
      </div>
    </div >)
}

export default ProjectDetails;
