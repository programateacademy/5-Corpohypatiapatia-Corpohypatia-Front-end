import React from 'react'
import "./footer.css"
import {GoLocation} from 'react-icons/go'
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Display">
        <div className='Footer-main'>
          <div id="Footer-s1">
           
            <h4>Hypatia</h4>
          </div>
          
        </div>

        {/* Footer for movil version and tablet version */}
        <div className="Footer__links">
          <Dropdown as={ButtonGroup} className="Dropdown-menu">
            <Button id="drop1">Quienes somos</Button>
            <Dropdown.Toggle id="dropdown-split-basic" className='dropdown-toggle'/>
            <Dropdown.Menu className="Dropdown__Menu">
              <Dropdown.Item href="#/action-1">La Corporación para la Equidad, la Democracia y el Buen Vivir -
              CORPORACIÓN HYPATIA, es una organización no gubernamental, sin
              ánimo de lucro, con sede en Bucaramanga (Santander) - Colombia. Su
              objeto social es la promoción y defensa integral de los derechos
              humanos, especialmente los derechos de las mujeres, la búsqueda de
              la equidad social y de género, el fortalecimiento de la
              gobernabilidad y de una sociedad democrática, contribuyendo a la
              construcción de una Cultura de paz y a la prevención y
              erradicación de toda forma de discriminación y vulneración de
              derechos por razones de sexo, etnia, orientación sexual, edad y
              condición socioeconómica.</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          

          <Dropdown as={ButtonGroup} className="Dropdown-menu" >
            <Button id="drop4">Contáctanos</Button>
            <Dropdown.Toggle id="dropdown-split-basic" className='dropdown-toggle4'/>
            <Dropdown.Menu className="Dropdown__Menu">
              <Dropdown.Item href="#/action-1">320-4516192 / 301-3681863</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown as={ButtonGroup} className="Dropdown-menu" >
            <Button id="drop4">Ubicacion</Button>
            <Dropdown.Toggle id="dropdown-split-basic" className='dropdown-toggle4'/>
            <Dropdown.Menu className="Dropdown__Menu">
              <Dropdown.Item href="#/action-1">  Bucaramanga <br />
                  Floridablanca <br />
                  Girón <br />
                  Piedecuesta</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="Social">
          <h3>Síguenos</h3>
          <div className="Social__links">
            <div className="social-icon__figure"><AiFillInstagram className='social-icon'/></div>
            <div className="social-icon__figure"><BsTwitter className='social-icon'/></div>
            <div className="social-icon__figure"><FaFacebookF className='social-icon'/></div>
          </div>
        </div>
      </div>

      {/* Footer for desktop version */}
      <div className='Footer-main1'>
        <div className="Fot-desc">
          
          <h4>Quienes somos </h4>
          <div className='footicon'><GoLocation id="icon-fott1-d"/> <p>La Corporación para la Equidad, la Democracia y el Buen Vivir -
              CORPORACIÓN HYPATIA, es una organización no gubernamental, sin
              ánimo de lucro, con sede en Bucaramanga (Santander) - Colombia. Su
              objeto social es la promoción y defensa integral de los derechos
              humanos, especialmente los derechos de las mujeres, la búsqueda de
              la equidad social y de género, el fortalecimiento de la
              gobernabilidad y de una sociedad democrática, contribuyendo a la
              construcción de una Cultura de paz y a la prevención y
              erradicación de toda forma de discriminación y vulneración de
              derechos por razones de sexo, etnia, orientación sexual, edad y
              condición socioeconómica.</p></div>
          
        </div>

        <div className="Foot__info">
          <h5>Ubicacion</h5>
          <Link to="" className='link'>Bucaramanga <br />
                  Floridablanca <br />
                  Girón <br />
                  Piedecuesta</Link>
        </div>

        

        <div className="Foot__Contact">
        <h5>Contáctanos</h5>
          <Link to="" className='link'>320-4516192 / 301-3681863</Link>
        </div>

        <div className="Foot__Social">
        <h4>Síguenos</h4>
          <div className="Social__links">
            <div className="social-icon__figure"><AiFillInstagram className='social-icon'/></div>
            <div className="social-icon__figure"><BsTwitter className='social-icon'/></div>
            <div className="social-icon__figure"><FaFacebookF className='social-icon'/></div>
          </div>
        </div>

        <div className="Footer-email">
         
       
        </div>
      </div>
    </footer>
  )
}

export default Footer