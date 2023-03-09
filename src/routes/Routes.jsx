import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//import components
import Home from "../pages/home/Home";
import AllProjects from "../pages/allProjects/AllProjects";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import Checklist from "../pages/projectDetails/Checklist";
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
import HOC from "./HOC"

const AllRoutes = () => {

  const location = useLocation();

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
        <HOC/>
      )}
    </>
  );

};

export default AllRoutes;
