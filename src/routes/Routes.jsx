import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import components
import Home from "../pages/home/Home";
import AllProjects from "../pages/allProjects/AllProjects";
import Login from "../pages/login/Login"
import ResetPassword from "../pages/resetPassword/ResetPassword";
import ChangePassword from "../pages/changePassword/ChangePassword";

import { ScrollToTop } from "../components/common/ScrollToTop";

const AllRoutes = () => {
    return (
        <>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/home" element={<Navigate to="/"/>} />
                <Route path='/admin-projects' element={<AllProjects/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/reset-password' element={<ResetPassword/>} />
                <Route path='/change-password/:token' element={<ChangePassword/>} />
            </Routes>
        </>
    );
};

export default AllRoutes;