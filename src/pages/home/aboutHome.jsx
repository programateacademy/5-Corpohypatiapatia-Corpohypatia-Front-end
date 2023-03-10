import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import organi from "../images/organi.png";
import onu from "../images/onu.png";
import Footer from "./Footer";

function AboutHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row px-5">
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <p className="fs-3 text-center">Misión</p>
            <p className="">
              Somos una organización que promueve y defiende los derechos humanos con enfoques diferenciales, en la búsqueda de la igualdad social y de género, la construcción de una sociedad democrática, pacífica y respetuosa de las diferencias, que garantice el buen vivir de hombres y mujeres en su
              diversidad.
            </p>
            <div className="graphicLogo">
              <img src={logo} alt="graphic piece" width={250} className="rounded mx-auto d-block my-5" />
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <div className="ratio ratio-16x9 mb-5">
              <iframe src="" frameborder="0"></iframe>
            </div>
            <p className="fs-3 text-center">¿Quiénes Somos?</p>
            <p className="mb-5">La Corporación para la Equidad, la Democracia y el Buen Vivir - CORPORACIÓN HYPATIA, es una organización no gubernamental, sin ánimo de lucro, con sede en Bucaramanga (Santander) - Colombia.
              Su objeto social es la promoción y defensa integral de los derechos humanos, especialmente los derechos de las mujeres, la búsqueda de la equidad social y de género, el fortalecimiento de la gobernabilidad y de una sociedad democrática, contribuyendo a la construcción de una Cultura de paz y a la prevención y erradicación de toda forma de discriminación y vulneración de derechos por razones de sexo, etnia, orientación sexual, edad y condición socioeconómica.
            </p>
            <Link to="/nosotros">
              <button type="button" className="btn btn-lg btn-continuar">
                Continuar
              </button>
            </Link>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <p className="fs-3 text-center">Visión</p>
            <p>
              La Corporación Hypatia es reconocida por su capacidad de influir en los derechos humanos, la democracia, la equidad y el buen vivir de hombres y mujeres en su diversidad.
            </p>
            <div className="organi my-5">
              <img src={organi} alt="organigrama" width={250} className="rounded mx-auto d-block" />
            </div>
          </div>
        </div>
        <div className="onu">
          <img src={onu} alt="asociaciones" className='img-fluid'/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutHome;
