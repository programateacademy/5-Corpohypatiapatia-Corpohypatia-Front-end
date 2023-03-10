import React, { useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLogo,
    SSidebar,
    SSidebarButton,
    SInfo,
    SUserType, SUserState,
} from "./styles";

import logoSVG from "../../../assets/img/brandReduce-CorpoHypatia.png";
import logo2SVG from "../../../assets/img/CorpoHypatia-side.png";

import {
    VscFolderOpened,
    VscNewFolder,
} from "react-icons/vsc";
import {
    AiOutlineHome,
    AiOutlineSetting
} from "react-icons/ai"
import {
    HiOutlineUserGroup,
    HiOutlineUserAdd,
} from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BsBuilding} from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    function logout() {
        localStorage.removeItem('token');
    }

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    {!sidebarOpen ? <FaBars /> : <CgClose />}
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logoSVG} alt="logo" width={sidebarOpen ? 0 : 50} />
                {sidebarOpen && <img src={logo2SVG} alt="logo" />}
            </SLogo>
            {
                sidebarOpen &&
                <SInfo>
                    <SUserType>
                        Administrador
                    </SUserType>
                    <SUserState>
                        Activo
                    </SUserState>
                </SInfo>
            }
            <SDivider />
            {linksArray.map(({ icon, label, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <SLinkLabel>{label}</SLinkLabel>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            
            <SLinkContainer>
                <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
                    <SLinkIcon onClick={() => logout()}><MdLogout /></SLinkIcon>
                    {sidebarOpen && <SLinkLabel>Logout</SLinkLabel>}
                </SLink>
            </SLinkContainer>
            <SDivider />
        </SSidebar>
    );
};

const linksArray = [
    {
        label: "Lista de proyectos",
        icon: <VscFolderOpened />,
        to: "/projects",
    },
    {
        label: "Crear proyectos",
        icon: <VscNewFolder />,
        to: "/step",
    },
    {
        label: "Entidad",
        icon: <BsBuilding />,
        to: "/entidad-solicitante",
    },
    {
        label: "Lista de usuarios",
        icon: <HiOutlineUserGroup />,
        to: "/all-users",
    },
    {
        label: "Agregar usuarios",
        icon: <HiOutlineUserAdd />,
        to: "/create-user",
    },
];


export default Sidebar;