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

const AllRoutes = () => {

  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      {location.pathname === "/" || location.pathname === "/home" || location.pathname === "/login" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/projects/edit/:id" element={<ProjectEdit />} />
            <Route path="/step" element={<Steps />} />
            <Route path="/entidad-solicitante" element={<EntityForm />} />
            <Route path="/all-users" element={<AllUsers />} />
            <Route path='/create-user' element={<CreateUser />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/change-password/:token" element={<ChangePassword />} />
          </Routes>
        </Layout>
      )}
    </>
  );

};

export default AllRoutes;
