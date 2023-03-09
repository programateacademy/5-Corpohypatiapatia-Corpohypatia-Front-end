import logo from "../../../assets/img/logo.jpg";
import React, { useState, useEffect } from "react";
import "./header.css";

function Header() {
  // hooks
  const [info, setInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  //api or db
  const URL = "https://jsonplaceholder.typicode.com/users";

  //datos a traer
  const dataSheet = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setInfo(data);
    console.log(data);
  };

  useEffect(() => {
    dataSheet();
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary bg-light justify-content-center text-center">
        <div className="container-fluid">
          <a className="navbar-brand p-0" href="/">
            <img src={logo} width="200" alt="corpohypatia" />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            onClick={handleToggle}
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-end${isOpen ? " show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-lg-0 p-3 flex-column flex-sm-row justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/nosotros-proyectos-colaboradores"
                  onClick={handleToggle}
                >
                  <b>Nosotros</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/proyectos-colaboradores"
                  onClick={handleToggle}
                >
                  <b>Proyectos</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/colaboradores"
                  onClick={handleToggle}
                >
                  <b>Colaboradores</b>
                </a>
              </li>
              <li className="nav-item ms-sm-3">
                <a
                  className="nav-link active btn-purple"
                  aria-current="page"
                  href="/login"
                >
                  Iniciar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
