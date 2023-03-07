// import image for carousel
import Graphic from "../../assets/img/grafico.png";
import logo from "../../assets/img/logo.jpg";
import "./home.css";
import Header from "../../components/layouts/header/Header";
import Footer from "../../components/layouts/footer/Footer";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2">
            <p className="fs-1 mt-5">BIENVENID@S</p>
            <p className=" mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque earum repudiandae velit ipsa molestiae perferendis quae
              voluptate, adipisci et porro qui unde ad? Asperiores, accusamus
              tenetur obcaecati eos velit delectus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus maxime totam a? Laborum
              quasi nulla corporis alias ducimus. Ad obcaecati cupiditate ab
              enim molestiae unde quibusdam eligendi dignissimos tenetur.
              Incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Soluta vel aut consequatur beatae officia vitae veniam, eos
              recusandae sequi autem quibusdam dolore asperiores? Sequi,
              aspernatur odit? Dolorem laboriosam cupiditate ad?
            </p>
            {/* buttons */}
            <div className="mt-5">
              <button type="button" class="btn btn-lg btn-continuar">
                Continuar
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="graphic-image">
              <img
                src={Graphic}
                alt="graphic piece"
                width="700"
                className="rounded mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Title and search */}
      <div className="row px-5 py-3 bg-purple text-purple align-items-center my-4">
        <div className="col-12 text-center">
          <h1 className="text-center text-purple display-4 mb-4">Proyectos</h1>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-start mb-3">
          <div className="col-md-2 col-sm-2">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control border-purple"
                placeholder="Buscar proyectos"
              />
              <span className="input-group-text bg-purple border-purple">
                <i className="bi bi-search text-white"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
