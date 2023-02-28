<<<<<<< HEAD
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { getHome } from "../../service/api";

import "./home.css";

function Home() {
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const signOff = (ruta) => {
    localStorage.removeItem("token");
    navigate(ruta);
  };

  async function fetchData(token) {
    if (token) {
      const res = await getHome(token);
      setMessage(res.data.message);
    }
  }

  useEffect(() => {
    fetchData(token);
  }, [token]);

  return (
    <div className="container">
      <div className="home">
        <h3>{message ? `${message}` : "No estas autorizado!"}</h3>
        <button onClick={() => signOff("/login")}>
          {!message ? "Iniciar Sesión" : "Cerrar Sesión"}
        </button>
      </div>
    </div>
  );
=======
// import image for carousel
import FotHypa from '../../assets/img/Fot-Hypa.jpg'
import FotHypatia from '../../assets/img/Fot-Hypatia.jpg'
import Hypatia from '../../assets/img/Hypatia.jpg'
import './home.css'

function Home() {
    return (
        <>
            <p className="fs-1 text-uppercase text-center mt-4 mb-4">corpohypatia</p>
            {/* bootstrap image carousel */}
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FotHypa} className="d-block w-100 " alt="ggg" />
                    </div>
                    <div className="carousel-item">
                        <img src={FotHypatia} className="d-block w-100" alt="rrr" />
                    </div>
                    <div className="carousel-item">
                        <img src={Hypatia} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* text */}
            <div className="container">
                <div className="row">
                    <p className="fs-3 text-center mt-5">¿Quiénes Somos?</p>
                    <p className="">La Corporación para la Equidad, la Democracia y el Buen Vivir - CORPORACIÓN HYPATIA, es una organización no gubernamental, sin ánimo de lucro, con sede en Bucaramanga (Santander) - Colombia.
                        Su objeto social es la promoción y defensa integral de los derechos humanos, especialmente los derechos de las mujeres, la búsqueda de la equidad social y de género, el fortalecimiento de la gobernabilidad y de una sociedad democrática, contribuyendo a la construcción de una Cultura de paz y a la prevención y erradicación de toda forma de discriminación y vulneración de derechos por razones de sexo, etnia, orientación sexual, edad y condición socioeconómica.
                    </p>
                    <p className="fs-3 text-center mt-3">Misión</p>
                    <p>
                        Somos una organización que promueve y defiende los derechos humanos con enfoques diferenciales, en la búsqueda de la igualdad social y de género, la construcción de una sociedad democrática, pacífica y respetuosa de las diferencias, que garantice el buen vivir de hombres y mujeres en su
                        diversidad.
                    </p>
                    <p className="fs-3 text-center mt-3">Visión</p>
                    <p>
                        La Corporación Hypatia es reconocida por su capacidad de influir en los derechos humanos, la democracia, la equidad y el buen vivir de hombres y mujeres en su diversidad.
                    </p>
                </div>
            </div>
            {/* buttons */}
            <div className="container">
                <div className="d-flex gap-4 col-2 mx-auto m-5">
                <button type="button" class="btn btn-outline-secondary">Ingresar</button>
                <button type="button" class="btn btn-outline-secondary">Continuar</button>
                </div>
            </div>
        </>
    );
>>>>>>> c8675fae692eb0cdb25e1abf39435850475b4a72
}

export default Home;
