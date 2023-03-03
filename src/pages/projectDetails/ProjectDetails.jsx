import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../service/api";
import { Link } from "react-router-dom";

// import ReadMore from "./ReadMore";
import "./StylesDetails.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { BsBoxArrowUp } from "react-icons/bs";
import { RiFileEditLine } from "react-icons/ri";
import Checklist from "./Checklist";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { fontWeight, textAlign } from "@mui/system";
pdfMake.vfs = pdfFonts.pdfMake.vfs

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



  const docDefinition = {
    footer: function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },
    header: function(currentPage, pageCount, pageSize) {

      return [
        {  text: currentPage + ' / ' + pageCount,   fontsize: 10, bold: true},
        { canvas: [ { type: 'rect', x: 170, y: 32, w: pageSize.width - 170, h: 40 } ] }
      ]
    },

    content: [
      {text:'Corpohypatia', style: 'header'},
      {text: 'Another text', style: 'anotherStyle'},
      {text: 'Multiple styles applied', style: ['header', 'anotherStyle']},
      
      {
        text: 'This is a header, using header style',
        style: 'header'
      },
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
      {
        text: 'Subheader 1 - using subheader style',
        style: 'subheader'
      },
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
      {
        text: 'Subheader 2 - using subheader style',
        style: 'subheader'
      },
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
      {
        text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
        style: ['quote', 'small']
      },
      {
        text: 'This is a header, using header style',
        style: 'header'
      },
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
      {
        text: 'Subheader 1 - using subheader style',
        style: 'subheader'
      },
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
      {
        text: 'Subheader 2 - using subheader style',
        style: 'subheader'
      },
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
      {
        text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
        style: ['quote', 'small']
      }
    ],



    styles: {
      header: {
        fontSize: 22,
        bold: true,
       
      },

      anotherStyle: {
        italics: true,
        alignment: 'center',
      },
      quote: {
        italics: true
      },
      small: {
        fontSize: 8
      }

      
    },
  };

  const [url, setUrl] = useState(null)

const createPdf = () =>{
  const pdfGenerador = pdfMake.createPdf(docDefinition);
  pdfGenerador.getBlob((blob)=>{
    const url = URL.createObjectURL(blob);
    setUrl(url)
  })
  pdfGenerador.open();
}

  // console.log(project.problematic_summary)

  // const text = project.problematic_summary
  // console.log(`texto ${text}`)

  return (
    <div className="contenedor-Detalle" id="content">

      <div className="card-foto">
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
                <p>15%</p>
              </div>
            </div>
          </div>
        </div>
      </div >

      <div class="margen">
        <div class="segun-margen">
          {/* card sencilla indicador*/}
          <h2 className="title-margin">Indicadores:</h2>
          <div class="card">
            <div className="forma">
              <div class="cards-indicador">
                <div className="rectangulo">
                  <p>Indicador</p>
                </div>
                {/* <p class="card-text">Lorem Ipsum is simply dummy text</p> */}
              </div>
              {/* <div className="indicador">
                <p className="porcetanje-indi">76.52% </p>
                <p className="texto-avance">Avance</p>
              </div> */}
              <Checklist />
            </div>
          </div>
          {/* card sencilla fechas*/}

          <div class="card">
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
                      {/* <ReadMore text={project.problematic_summary}/> */}
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

                    {/* <div className="texto-fecha">
                      <p>Fecha de corte:</p>
                      <p>Fecha de actualizacion:</p>
                    </div> */}
                  </div>

                  {/* <div className="card-body">
                    <h5 className="card-title">
                      Comportamiento anual del indicador
                    </h5>
                    <hr />
                  </div> */}
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
                    {/* <ul>
                      {project.specific_objectives.map((elemento) => (
                        <li key={elemento}>{elemento}</li>
                      ))}
                    </ul> */}
                  </div></div>
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
        <button onClick={createPdf} className="boton-export" >
          Exportar <BsBoxArrowUp className="icon-Export" />
        </button>
        {/* {url} && {
          <div>
            {url}
            </div>
        } */}
    
      </div>
    </div >
  );
}

export default ProjectDetails;
