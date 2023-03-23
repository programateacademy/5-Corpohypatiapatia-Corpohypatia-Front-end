import React from 'react'
import { useState } from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import { FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import logo from '../../../assets/img/CorpoHypatia-side.png'
import "./footer.css"
import {MdWeb} from "react-icons/md"
import {AiOutlineMail} from "react-icons/ai"

const Footer = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const toggleAbout = () => setShowAbout(!showAbout);
  const toggleLocations = () => setShowLocations(!showLocations);
  const toggleSocial = () => setShowSocial(!showSocial);

  return (
    <footer className="bg ">

      <Container className='mobile'>
        <Row>
          <Col md={4}>
            <img className='logo' src={logo} alt="logo" />
          </Col>
          <Col md={4}>
            <h5>
              <Button className='footh5 dropdown-toggle' variant="link" onClick={toggleAbout}>
                Quiénes somos
              </Button>
            </h5>
            <Collapse in={showAbout}>
              <p>
              La CORPORACIÓN HYPATIA es una organización sin fines de lucro con sede en Colombia que se dedica a la promoción y defensa de los derechos humanos, especialmente los derechos de las mujeres, la equidad social y de género, la gobernabilidad y una sociedad democrática. También busca construir una cultura de paz y prevenir y erradicar la discriminación y la vulneración de los derechos debido a la edad, la orientación sexual, la etnia y la condición socioeconómica.
              </p>
            </Collapse>
          </Col>
          <Col md={4} >
            <h5>
              <Button className='footh5
              dropdown-toggle' variant="link" onClick={toggleLocations}>
                Ubicaciones
              </Button>
            </h5>
            <Collapse in={showLocations}>
              <ul className='location'>
                <li>
                  <FaMapMarkerAlt /> Bogotá Calle #28-44 B. Universidad 
                </li>
              </ul>
            </Collapse>
          </Col>
          <Col md={4}>
            <h5 className='btn footh5'>
                Redes sociales              
            </h5>
              <ul className="socials">
                <li>
                  <a href="https://corporacionhypatia.blogspot.com/">
                    <MdWeb/> 
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Corpo_Hypatia">
                    <FaTwitter/> 
                  </a>
                </li>
                <li>
                  <a href="mailto:hypatiacorporacion@gmail.com">
                    <AiOutlineMail/>
                  </a>
                </li>
              </ul>
          </Col>
        </Row>
      </Container>

    {/*computadores*/}
      <section className="desktop bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Quiénes somos</h3>
              <p>
              La CORPORACIÓN HYPATIA es una organización sin fines de lucro con sede en Colombia que se dedica a la promoción y defensa de los derechos humanos, especialmente los derechos de las mujeres, la equidad social y de género, la gobernabilidad y una sociedad democrática. También busca construir una cultura de paz y prevenir y erradicar la discriminación y la vulneración de los derechos debido a la edad, la orientación sexual, la etnia y la condición socioeconómica.
              </p>
            </div>
            <div className="col-md-3">
              <h3>Contactanos</h3>
              <ul className="list-unstyled">
                <li><FaMapMarkerAlt /> Bogotá Calle #28-44 B. Universidad </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Redes sociales</h3>
              <ul className="list-unstyled">
              <li>
                  <a href="https://corporacionhypatia.blogspot.com/">
                    <MdWeb/> Blog
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Corpo_Hypatia">
                    <FaTwitter/> Twitter
                  </a>
                </li>
                <li>
                  <a href="mailto:hypatiacorporacion@gmail.com">
                    <AiOutlineMail/> Emai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </footer>





  )
}

export default Footer

