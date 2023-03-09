import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//import components
import AllProjects from "../pages/allProjects/AllProjects";
import ProjectDetails from "../pages/projectDetails/ProjectDetails";
import Checklist from "../pages/projectDetails/Checklist";
import ProjectEdit from "../pages/projectEdit/projectEdit";
import Steps from "../pages/projectCreate/Steps";
import ResetPassword from "../pages/resetPassword/ResetPassword";
import ChangePassword from "../pages/changePassword/ChangePassword";
import AllUsers from "../pages/allUsers/AllUsers";
import Layout from "../components/layouts/Layout/Layout";
import EntityForm from "../pages/Form/EntityForm";
import CreateUser from "../pages/allUsers/CreateUser";
import EditUser from "../pages/allUsers/EditUser";

const AuthGuard = () => {
    const isAuthenticated = localStorage.getItem("token");
    console.log(isAuthenticated)
    return (
        <>
        {
          !isAuthenticated ? (
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
            </Layout>
          ) : (
              <Navigate to="/login" />
          )
        }
        </>
    );
  };

export default AuthGuard