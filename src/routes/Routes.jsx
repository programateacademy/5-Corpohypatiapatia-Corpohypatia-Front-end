import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import Home from "../pages/home/Home";
import AllProjects from "../pages/allProjects/AllProjects";
import ProjectCreate from "../pages/projectCreate/ProjectCreate";
import ProjectDetails from "../pages/projectDetails/ProjectDetails"
import Checklist from "../pages/projectDetails/Checklist";
import ProjectEdit from "../pages/projectEdit/projectEdit";

import Login from "../pages/login/Login"
import UserRegister from "../pages/userRegister/UserRegister"

import { ScrollToTop } from "../components/common/ScrollToTop";
import Steps from "../pages/projectCreate/Steps";
import form from "../pages/allProjects/form";

const AllRoutes = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/home" element={<Navigate to="/"/>} />
                <Route path='/admin-projects' element={<AllProjects/>} />
                <Route path='/admin-projects/:id' element={<ProjectDetails/>} />
                <Route path='/admin-projects/edit/:id' element={<ProjectEdit/>} />
                <Route path='/admin-create-project' element={<ProjectCreate/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/user-register' element={<UserRegister/>} />
                <Route path='/entidad-solicitante' element={<form/>} />
                <Route path='/checklist' element={<Checklist/>} />
                <Route path='/step' element={<Steps/>} />
            </Routes>
        </>
    );
};

export default AllRoutes;