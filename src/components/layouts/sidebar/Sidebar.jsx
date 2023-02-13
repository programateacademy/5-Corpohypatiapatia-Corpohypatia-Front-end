import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../../assets/img/CorpoHypatia.png";
import logo2 from "../../../assets/img/brandReduce-CorpoHypatia.png";

import {
    FaBars,
    FaThLarge,
} from "react-icons/fa";
import {
    FiLogOut
} from "react-icons/fi";
import {
    IoIosArrowForward,
    IoIosArrowDown
} from "react-icons/io";
import {
    AiFillHome
} from "react-icons/ai";
import {
    ImFolderOpen,
    ImFolderPlus,
    ImUserPlus
} from "react-icons/im";
import {
    HiUsers,
    HiUserGroup,
} from "react-icons/hi";

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const [openDP, setOpenDP] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <div className="toggleMenu">
                    <label>Administrador</label>
                    <FaBars onClick={() => setOpenMenu(!openMenu)} className="menuBars" size={25}/>
                </div>
                <img src={logo} width={150}/>
                <div className="info">
                    <h3>Usuario</h3>
                    <label>Activo</label>
                </div>
            </div>
            <ul className="nav-links">
                <div className="menu">
                    <li className="home"><a href="/">
                        <AiFillHome className="iconBar"/>
                        Home
                    </a></li>
                    <li><a href="/">
                        <FaThLarge className="iconBar"/>
                        Proyectos
                    </a>{openDP ? <IoIosArrowForward/> : <IoIosArrowDown/>}</li>
                    <ul className="subMenu">
                        <li><a>
                            <ImFolderOpen className="subIconos"/>
                            Lista de proyectos
                        </a></li>
                        <li><a>
                            <ImFolderPlus className="subIconos"/>
                            Crear Proyectos
                        </a></li>
                    </ul>
                    <li><a href="/">
                        <HiUserGroup className="iconBar"/>
                        Usuarios
                    </a>{openDP ? <IoIosArrowForward/> : <IoIosArrowDown/>}
                    </li>
                    <ul className="subMenu">
                        <li><a>
                            <HiUsers className="subIconos"/>
                            Lista de usuarios
                        </a></li>
                        <li><a>
                            <ImUserPlus className="subIconos"/>
                            Crear Usuarios
                        </a></li>
                    </ul>
                </div>
            </ul>
            <div className="logout">
                <button>Cerrar sesion <FiLogOut/></button>
            </div>
        </nav>
    );
};

export default Sidebar;