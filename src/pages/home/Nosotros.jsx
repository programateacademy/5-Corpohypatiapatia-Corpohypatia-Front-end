import React from "react";
import Header from "../../components/layouts/header/Header";
import Footer from "../../components/layouts/footer/Footer";
import portada from "../../assets/img/portada.jpg";
import imagen1 from "../../assets/img/imagen1.jpg";
import imagen2 from "../../assets/img/imagen2.jpg";
import imagen3 from "../../assets/img/imagen3.jpg";
import YouTube from "react-youtube";
import "./styles/Nosotros.css"

const videoId = "a4yhwmRq1hg";

const Nosotros = () => {
  const videoOpts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <Header />
      <div className="portada">
        <img src={portada} alt="Portada" />
      </div>
      <div className="quienes-somos">
        <h1 className="text-center">Quiénes somos</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={imagen1} alt="Imagen 1" className="imagen1" />
        </div>
        <div className="col-md-6">
          <p className="text3">
            La Corporación para la Equidad, la Democracia y el Buen Vivir -
            CORPORACIÓN HYPATIA, es una organización no gubernamental, sin ánimo
            de lucro, con sede en Bucaramanga (Santander) - Colombia. Su objeto
            social es la promoción y defensa integral de los derechos humanos,
            especialmente los derechos de las mujeres, la búsqueda de la equidad
            social y de género, el fortalecimiento de la gobernabilidad y de una
            sociedad democrática, contribuyendo a la construcción de una Cultura
            de paz y a la prevención y erradicación de toda forma de
            discriminación y vulneración de derechos por razones de sexo, etnia,
            orientación sexual, edad y condición socioeconómica.
          </p>
        </div>
      </div>
      <div className="video">
        <YouTube videoId={videoId} opts={videoOpts} />
      </div>
      <div className="fondo">
      <div className="row">
        <div className="col-md-6">
          <div className="imagen-circular text-center">
            <img src={imagen2} alt="Imagen 2" />
            <p className="text2">
              Somos una organización que promueve y <br />defiende los derechos
              humanos con enfoques diferenciales,  <br /> en la búsqueda de la igualdad
              social y de género, la construcción  de una sociedad <br />democrática,
              pacífica y respetuosa de las diferencias, <br /> que garantice el buen
              vivir de hombres y mujeres en su diversidad. 
              
            </p>
          </div>
        </div>
        <div className="col-md-6">
        
          <div className="imagen-circular text-center">
            <img src={imagen3} alt="Imagen 2" />
            <p  className="text2">
              La Corporación Hypatia es reconocida por su capacidad de influir
              en los derechos humanos, <br />la democracia, la equidad y el buen vivir
              de hombres y mujeres en su diversidad.
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;
