import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages";
import Home from "../pages/home";

const RouterManagement = () => {
    return(
        <Routes>
            <Route path="/" element={<IndexPage />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default RouterManagement;