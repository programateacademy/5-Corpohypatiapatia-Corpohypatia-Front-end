import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import Home from "../pages/home/Home";
import AllProjects from "../pages/allProjects/AllProjects";
import ProjectCreate from "../pages/projectCreate/ProjectCreate";

import { ScrollToTop } from "../components/common/ScrollToTop";

const AllRoutes = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/home" element={<Navigate to="/"/>} />
                <Route path='/admin-projects' element={<AllProjects/>} />
                <Route path='/admin-create-project' element={<ProjectCreate/>} />
            </Routes>
        </>
    );
};

export default AllRoutes;