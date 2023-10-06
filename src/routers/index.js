import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages";
import Home from "../pages/home";
import EventPage from "../pages/eventPage";

const RouterManagement = () => {
    return(
        <Routes>
            <Route path="/" element={<IndexPage />}>
                <Route index element={<Home />} />
                <Route path="/events" element={<EventPage />} />
            </Route>
        </Routes>
    )
}

export default RouterManagement;