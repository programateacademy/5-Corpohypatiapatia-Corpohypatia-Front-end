// import image for carousel
import Graphic from "../../assets/img/grafico.png";
import "./home.css";
import Header from "../../components/layouts/header/Header";
import Footer from "../../components/layouts/footer/Footer";
import { AiOutlineSearch } from "react-icons/ai"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getAllProjects } from "../../service/api"
import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.jpg"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
};

function Home() {

  const [allProyects, setAllProyects] = useState([])

  useEffect(() => {
    getAllProjects(setAllProyects)
    localStorage.clear()
  }, []);

  //Open image modal
  const handleOpen = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  const [selectedCard, setSelectedCard] = useState(null);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  const projectPerPage = 6;

  const visitedPage = pageNumber * projectPerPage;

  const displayPage = allProyects.slice(
    visitedPage,
    visitedPage + projectPerPage
  );

  //projects lenghts / 6 [ math ceil calculate how many pages ]
  const pageCount = Math.ceil(allProyects.length / projectPerPage);

  console.log(allProyects)

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 px-2">
            <p className="fs-1 mt-5 welcome-title">BIENVENID@S</p>
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
              <button type="button" className="btn btn-lg btn-continuar">
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

      {/* Projects itle and search */}
      <div className="py-3 bg-purple text-purple align-items-center my-4">
        <div className="col-12 text-center">
          <h1 className="text-center text-purple display-4 mb-4" id="projects">CONOCE NUESTROS PROYECTOS</h1>
        </div>
      </div>
      <div className="search-bar">
        <span><AiOutlineSearch /></span><input type={'search'} placeholder="Buscar un proyecto..."></input>
      </div>

      <h3 id="proyect-count">Cantidad de proyectos: {allProyects.length}</h3>
      {/* Card projects*/}

      <div className="proyect-list">

        {displayPage.map((card) => {
          return (
            <div key={card._id}>
              <Card sx={{ maxWidth: 370 }} className="card_body">
                <CardActionArea onClick={() => handleOpen(card)}>
                  <CardMedia
                    component="img"
                    alt="Proyect image"
                    height="140"
                    image={card.imagePath}
                  />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="project-title">
                      {card.project_title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.project_location}
                    </Typography>
                </CardContent>
                <CardActions>
                      <Link to={`/homeProjectDetails/${card._id}`}><Button variant="contained" className="viewmore-butt">Leer más</Button></Link>
                      <img src={logo} id="card-logo"/>
                </CardActions>
              </Card>

              <Modal
                open={selectedCard !== null}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <img src={selectedCard?.imagePath} id="modal-path-image" />
                </Box>
              </Modal>
            </div>
          )
        })
        }
      </div>

      <div className="container_paginate">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel="Anterior"
            previousClassName="paginate-butts"
            nextLabel="Siguiente"
            nextClassName="paginate-butts"
            containerClassName="paginationBttns"
            activeClassName={"active_pagination"}
          />
        </div>

      <Footer />
    </>
  );
}

export default Home;