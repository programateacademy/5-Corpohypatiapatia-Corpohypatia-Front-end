import React from "react";
import { Routes, Route} from "react-router-dom";

import ProjectDetails  from './pages/projectDetails/ProjectDetails.jsx'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProjectDetails/>} />
        </Routes>
    );
};

export default AllRoutes;
