import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import Home from "../pages/home/Home";
import AllProjects from "../pages/allProjects/AllProjects";
import ProjectCreate from "../pages/projectCreate/ProjectCreate";
import ProjectDetails from "../pages/projectDetails/ProjectDetails"
import Checklist from "../pages/projectDetails/Checklist";
import Login from "../pages/login/Login"

import { ScrollToTop } from "../components/common/ScrollToTop";
import AllUsers from "../pages/allUsers/AllUsers";
import CreateUser from "../pages/allUsers/CreateUser";
import EditUser from "../pages/allUsers/EditUser";

const AllRoutes = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                {/* <Route path='/' element={<ProjectDetails/>} /> */}
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Navigate to="/"/>} />
                <Route path="/home" element={<Navigate to="/"/>} />
                <Route path='/admin-projects' element={<AllProjects/>} />
                <Route path='/admin-projects/:id' element={<ProjectDetails/>} />
                <Route path='/admin-create-project' element={<ProjectCreate/>} />
                <Route path='/users' element={<AllUsers/>}/>
                <Route path='/create-user' element={<CreateUser/>}/>
                <Route path='/edit-user/:id' element={<EditUser/>}/>

                <Route path='/checklist' element={<Checklist/>} />
            </Routes>
        </>
    );
};

export default AllRoutes;