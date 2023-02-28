function Footer() {
  return (
    <>
      {/* framework bootstrap */}
      <footer className="bg-light text-muted">
        <div className="row  m-0 p-5 ">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 ">
            <h4 className="text-dark">Quiénes somos</h4>
            <p className="text-justify">
              La Corporación para la Equidad, la Democracia y el Buen Vivir -
              CORPORACIÓN HYPATIA, es una organización no gubernamental, sin
              ánimo de lucro, con sede en Bucaramanga (Santander) - Colombia. Su
              objeto social es la promoción y defensa integral de los derechos
              humanos, especialmente los derechos de las mujeres, la búsqueda de
              la equidad social y de género, el fortalecimiento de la
              gobernabilidad y de una sociedad democrática, contribuyendo a la
              construcción de una Cultura de paz y a la prevención y
              erradicación de toda forma de discriminación y vulneración de
              derechos por razones de sexo, etnia, orientación sexual, edad y
              condición socioeconómica.
            </p>
          </div>
          <div className="col-sm-8 col-md-3 col-lg-3 col-xl-3 px-5">
            <h4 className="text-dark">SERVICE</h4>
            <div className="row">
              <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill mb-5 "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              </div>
              <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11">
                <p>
                  Bucaramanga <br />
                  Floridablanca <br />
                  Girón <br />
                  Piedecuesta
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </div>
              <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11">
                <p>320-4516192 / 301-3681863</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </div>
              <div className="col-sm-11 col-md-11 col-lg-11 col-xl-11">
                <p>hypatiacorporacion@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4  col-md-3 col-lg-3 col-xl-3 px-5">
            <h4 className="text-dark">SOCIAL</h4>
            <p>
              Facebook <br />
              Twitter <br />
              Instagram
            </p>
          </div>
        </div>
        <div className="row m-0 px-5">
          <div className="text-center px-5">
            <hr />
            <p>© CORPOHYPATIA Todos los derechos reservados, 2023 </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
