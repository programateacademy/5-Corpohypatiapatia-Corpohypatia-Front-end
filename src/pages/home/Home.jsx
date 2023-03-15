// import image for carousel
import "./styles/home.css";
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
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../../assets/img/homesrc/slider1.jpg"
import slide2 from "../../assets/img/homesrc/slider2.jpg"
import slide3 from "../../assets/img/homesrc/slider3.jpg"
import slide4 from "../../assets/img/homesrc/slider4.jpg"
import slide5 from "../../assets/img/homesrc/slider5.jpg"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
};

function Home() {

  const [allProyects, setAllProyects] = useState([])
  const [search, setSearch] = useState("");

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

  //search
  const searchedProject = allProyects.filter((item) => {
    if (search.value === "") return item;

    //use tolowercase to ignore mayuscule and minuscule and include search input value to filter.
    if (item.project_title.toLowerCase().includes(search.toLowerCase()))
      return item;
  });

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  const projectPerPage = 6;

  const visitedPage = pageNumber * projectPerPage;

  const displayPage = searchedProject.slice(
    visitedPage,
    visitedPage + projectPerPage
  );

  //projects lenghts / 6 [ math ceil calculate how many pages ]
  const pageCount = Math.ceil(searchedProject.length / projectPerPage);

  console.log(allProyects)

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      
      <div className="Slider">
        <Carousel>
          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={slide4}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item interval={4000}>
            <img
              className="d-block w-100"
              src={slide5}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>



      {/* Projects itle and search */}
      <div className="py-3 bg-purple text-purple align-items-center my-4">
        <div className="col-12 text-center">
          <h1 className="text-center text-purple display-4 mb-4" id="projects">CONOCE NUESTROS PROYECTOS</h1>
        </div>
      </div>
      <div className="search-bar">
        <span><AiOutlineSearch /></span>
        <input type={'search'} 
        placeholder="Buscar un proyecto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        >
        </input>
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

      <div className="container_paginate" id="Paginate">
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