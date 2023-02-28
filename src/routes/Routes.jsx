import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import Home from "../pages/home/Home";
import AllProjects from "../pages/allProjects/AllProjects";
import ProjectCreate from "../pages/projectCreate/ProjectCreate";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import Checklist from "../pages/projectDetails/Checklist";
import ProjectEdit from "../pages/projectEdit/projectEdit";
import Login from "../pages/login/Login"
import UserRegister from "../pages/userRegister/UserRegister"
import { ScrollToTop } from "../components/common/ScrollToTop";
import Steps from "../pages/projectCreate/Steps";

import ResetPassword from "../pages/resetPassword/ResetPassword";
import ChangePassword from "../pages/changePassword/ChangePassword";
import AllUsers from "../pages/allUsers/AllUsers";
import CreateUser from "../pages/allUsers/CreateUser";
import EditUser from "../pages/allUsers/EditUser";

const AllRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path='/admin-projects' element={<AllProjects />} />
        <Route path='/admin-projects/:id' element={<ProjectDetails />} />
        <Route path='/admin-projects/edit/:id' element={<ProjectEdit />} />
        <Route path='/admin-create-project' element={<ProjectCreate />} />
        <Route path='/checklist' element={<Checklist />} />
        <Route path='/step' element={<Steps />} />

        <Route path="/login" element={<Login />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/change-password/:token" element={<ChangePassword />} />
      </Routes>
    </>
  );

};

export default AllRoutes;
