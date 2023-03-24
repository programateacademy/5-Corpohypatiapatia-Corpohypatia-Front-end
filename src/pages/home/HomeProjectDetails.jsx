import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProjectById } from '../../service/api';
import "./styles/HomeProjectDatails.css"
import { RiArrowGoBackFill } from "react-icons/ri";
import HomeReadMore from "./HomeReadMore"
import Header from "../../components/layouts/header/Header"

const HomeProjectDetails = () => {
  
  const [project, setProject] = useState(null);

  const { id } = useParams();

  const loadProject = async () => {
     await getAllProjectById(id, setProject);
  }

  useEffect(() => {
    loadProject();
  }, []);

  //If req not load a project returns a message
  if (!project) {
    return (
      <>
        <div id="container-loader">
          <label className="loading-title">
            Cargando información de proyecto...
          </label>
          <span className="loading-circle sp1">
            <span className="loading-circle sp2">
              <span className="loading-circle sp3"></span>
            </span>
          </span>
        </div>
      </>
    );
  }
  
  return (
    <>
    <Header/>
      <div className="ProjectDetails__Main my-4 pb-4">
        <div className="w-75 mx-auto">
          <img className="imagenn" src={project.imagePath} alt="Card cap" />
          <div className="elemento-avance">
            <button
              className="return__btn"
              onClick={() => window.history.back()}
            >
              Regresar <RiArrowGoBackFill className="icon-regreso" />
            </button>
          </div>
        </div>
        <div className="project-detail-body w-75 mx-auto">
          <div>
            <h2 className="project-detail__title my-3 mt-md-0">{project.project_title}</h2>
            <div className="project-info p-2">
              <div class="container">
                <div class="row">
                    <div className="col-12 col-md-4">
                      <div>
                        <h5 className="project-detail__title mt-1 mt-md-3">Ubicación del proyecto: </h5>
                        <hr></hr>
                        <p clasName="text__colors">{project.project_location}</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div>
                        <h5 className="project-detail__title mt-1 mt-md-3">Duración del proyecto: </h5>
                        <hr></hr>
                        <p clasName="text__colors">{project.project_duration}</p>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div>
                        <h5 className="project-detail__title mt-1 mt-md-3">Estado del proyecto: </h5>
                        <hr></hr>
                        <p clasName={project.enabled ? ("project-enabled") : ("project-disabled")}>{project.enabled ? (`Habilitado`) : (`Deshabilitado`) }</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div className="mt-4">
            <h3 className="project-detail__title">Resumen / Problematica</h3>
            <hr></hr>
            <HomeReadMore text={project.problematic_summary} clasName="text__colors"/>
          </div>

          <div className="Objetive__info pt-2 mt-4">
              <h5 className="project-detail__title mt-1 mt-md-3"> Objetivos Generales</h5>
              <hr></hr>
              <HomeReadMore text={project.general_objetive}/>
          </div>

          <div className="mt-4">
            <h3 className="project-detail__title">Beneficiarios</h3>
            <hr></hr>
            <HomeReadMore text={project.beneficiaries} clasName="text__colors"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProjectDetails;