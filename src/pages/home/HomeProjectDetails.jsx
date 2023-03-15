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
  
  console.log(project)
  return (
    <>
    <Header/>
      <div>
      <div className="card-foto w-75 mx-auto">
        <img className="imagen" src={project.imagePath} alt="Card cap" />
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
          </div>

          <div className="elemento-avance">
            <button
              className="Boton-regresar"
              onClick={() => window.history.back()}
            >
              Regresar <RiArrowGoBackFill className="icon-regreso" />
            </button>
          </div>
        </div>
      </div>
      </div>

      <HomeReadMore text={project.problematic_summary}/>
    </>
  );
};

export default HomeProjectDetails;