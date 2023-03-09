// import image for carousel
import Graphic from "../../assets/img/grafico.png";
import "./home.css";
import Header from "../../components/layouts/header/Header";
import Footer from "../../components/layouts/footer/Footer";
import {AiOutlineSearch} from "react-icons/ai"
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

function Home() {

  const [allProyects, setAllProyects] = useState([])

  useEffect(() => {
    getAllProjects(setAllProyects)
    localStorage.clear()
  }, []);

  const testalert = () =>{
    alert("probando")
  }

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
          <h1 className="text-center text-purple display-4 mb-4" id="projects">PROYECTOS</h1>
        </div>
      </div>
      <div className="search-bar">
         <span><AiOutlineSearch/></span><input type={'search'} placeholder="Buscar un proyecto..."></input>
      </div>

      {/* Card projects*/}

      <div className="proyect-list">
        {
          allProyects.map(card =>{
            return(
              <div key={card._id}>
                <Card sx={{ maxWidth: 330 }} className="card_body">
                  <CardActionArea onClick={testalert}>
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
                    <Button variant="contained" className="viewmore-butt">Leer más</Button>
                  </CardActions>
                </Card>
              </div>
            )
          })
        }
      </div>

      <Footer />
    </>
  );
}

export default Home;
