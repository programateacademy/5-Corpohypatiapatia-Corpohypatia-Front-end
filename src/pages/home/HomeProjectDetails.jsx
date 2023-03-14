import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProjectById } from '../../service/api';
import "./HomeProjectDatails.css"

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
      <div>
        
      </div>
    </>
  );
};

export default HomeProjectDetails;