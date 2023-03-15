import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom"
import { getProject, editProject, deleteProject } from "../../service/api";
import Checklist from "./components/Checklist";
import ReadMore from "./components/ReadMore";
import "./StylesDetails.css";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import ExportPDFButton from "./components/ExportPdfButton";
import Loader from "./components/Loader";
import { RiArrowGoBackFill, RiFileEditLine} from "react-icons/ri";

function ProjectDetails() {

  const [project, setProject] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();
  const token = localStorage.getItem("token");

  const loadProjectsDetails = async () => {
    if (token) {
      const response = await getProject(id, token);
      setProject(response.data);
    }
  };

  useEffect(() => {
    loadProjectsDetails();
  }, [project]);

  const handleCheckboxChange = async (e) => {
    const updatedProject = { ...project };
    updatedProject.enabled = e.target.checked;
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Estás seguro de querer ${project.enabled === !true ? "habilitar" : "deshabilitar"
        } este proyecto?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      await editProject(updatedProject, id, token);
      await loadProjectsDetails();
      await Swal.fire({
        title: "¡Hecho!",
        text: "Cambios guardados con éxito",
        icon: "success",
        timer: 1500,
      });
    } else {
      e.target.checked = !e.target.checked;
    }
  };

  const deleteProjectDetails = async (id) => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar este proyecto?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, ¡bórralo!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject(id, token);
        navigate('/projects');
        Swal.fire(
          "¡Proyecto eliminado!",
          `El registro de este proyecto ha sido borrado con éxito`,
          "success"
        );
      }
    });
  };

  if (!project) {
    return <Loader/>
  }

  return (
    <div className="contenedor-Detalle">
      <div className="card-foto w-75 mx-auto">
        <div className="container-img">
        <img className="imagen" src={project.imagePath} alt="Card cap" /></div>
        <div className="reverse">
          <div className="cards">
            <div className="texto-v">
              <p className="texto-bold">Proyecto: {project.project_title}</p>
              <p className="texto-bold">
                Entidad: Corporación para la Equidad, la Democracia y el Buen
                Vivir – Corpohypatia.
              </p>
              <p className="texto-bold">
                Estrategia de bienestar emocional de niños y niñas de 5 a 12
                años en el municipio de Bucaramanga, Santander.
              </p>
            </div>

            <Link to={`/projects/edit/${project._id}`} className="button edit">
              <button className="boton-editar">
                Editar <RiFileEditLine className="icon-edit" />
              </button>
            </Link>
          </div>

          <div className="elemento-avance">
            <button
              className="Boton-regresar"
              onClick={() => window.history.back()}
            >
              Regresar <RiArrowGoBackFill className="icon-regreso" />
            </button>

            <div className="avance">
              <p>Avance</p>
              <div className="porcentaje-avance">
                <p>{project.project_percentage}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="margen w-75 mx-auto">
        <div className="segun-margen">
          {/* card sencilla indicador*/}
          <h2 className="title-margin">Indicadores:</h2>
          <Checklist />

          <div className="card">
            <div className="card-body">
              <div className="contenedor-fechas">
                <div className="fechas">
                  <div className="result-percentage">
                    <h2>{project.project_duration}</h2>
                    <p>Duración</p>
                  </div>
                </div>
                <div className="fechas">
                  <div className="result-percentage">
                    <h2>{project.project_budget}</h2>
                    <p>Presupuesto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
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
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
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
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
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

                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
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
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="resumen"
                  role="tabpanel"
                  aria-labelledby="resumen-tab"
                >
                  <div className="card-body">
                    <h5 className="card-title">Descripción del proyecto</h5>
                    <hr />
                    <p className="card-text text-summary">
                      <ReadMore text={project.problematic_summary} />
                    </p>
                    <br />
                    <h5 className="card-title">
                      Beneficiarios / población diana
                    </h5>
                    <hr />
                    {project.beneficiaries}
                    <br />
                    <br />
                    <h5 className="card-title">Resumen ejecutivo</h5>
                    <hr />
                    {project.executive_summary}
                    <br />
                    <br />
                    <h5 className="card-title">
                      Alineación del proyecto con políticas públicas y
                      prioridades locales, regionales, estatales y/o
                      Internacionales
                    </h5>
                    <hr />
                    {project.alignment}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
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
                  className="tab-pane fade"
                  id="ficha"
                  role="tabpanel"
                  aria-labelledby="ficha-tab"
                >
                  <div className="card-body">
                    <h5 className="card-title">Experiencia y capacidad</h5>
                    <hr />
                    {project.experience}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="Documento"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      Identificación de elementos que aseguren la sostenibilidad
                      económica, social y ambiental del Proyecto
                    </h5>
                    <hr />
                    {project.sustainability}
                    <br />
                    <br />

                    <h5 className="card-title">
                      Estrategia de salida al finalizar el proyecto
                    </h5>
                    <hr />
                    {project.exit_strategy}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExportPDFButton project={project}/>
      </div>

      <div className="project-status">
        <Button
          className="button delete"
          variant="contained"
          color="error"
          onClick={() => deleteProjectDetails(project._id)}
        >
          Eliminar proyecto
        </Button>
        <div className="project-status_cont">
          <p>Estado del proyecto:</p>
          <div className="check-status">
            <input
              type="checkbox"
              className="form-check-input"
              id="habilitado"
              checked={project?.enabled || false}
              onChange={handleCheckboxChange}
            />
            <label className="form-check-label" htmlFor="habilitado">
              Habilitado
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
