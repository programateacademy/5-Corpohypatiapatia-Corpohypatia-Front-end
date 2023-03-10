import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//import components
import Home from "../pages/home/Home";
import AllProjects from "../pages/allProjects/AllProjects";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import ProjectEdit from "../pages/projectEdit/projectEdit";
import Login from "../pages/login/Login"
import { ScrollToTop } from "../components/common/ScrollToTop";
import Steps from "../pages/projectCreate/Steps";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import ChangePassword from "../pages/changePassword/ChangePassword";
import AllUsers from "../pages/allUsers/AllUsers";
import Layout from "../components/layouts/Layout/Layout";
import EntityForm from "../pages/Form/EntityForm";
import CreateUser from "../pages/allUsers/CreateUser";
import EditUser from "../pages/allUsers/EditUser";
import Nosotros from "../pages/home/Nosotros";
import Colaboradores from "../pages/home/Colaboradores";
import { useState } from "react";
import NotFound from "../components/layouts/404/NotFound";

const AllRoutes = () => {
  const location = useLocation();
  
  const token = localStorage.getItem("token")
  
  return (
    <>
      <ScrollToTop />
      {location.pathname === "/" || location.pathname === "/home" || location.pathname === "/login" || location.pathname === "/nosotros" || location.pathname === "/colaboradores"? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/colaboradores" element={<Colaboradores/>} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/projects/edit/:id" element={<ProjectEdit />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/step" element={<Steps />} />
            <Route path="/entidad-solicitante" element={<EntityForm />} />
            <Route path="/all-users" element={<AllUsers />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/change-password/:token" element={<ChangePassword />} />
          </Routes>
        )
      )}
    </>
  );
};

export default AllRoutes;
