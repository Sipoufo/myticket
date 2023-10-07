import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages";
import Home from "../pages/home";
import EventPage from "../pages/eventPage";
import EventPresentation from "../pages/eventPresentation";

const RouterManagement = () => {
    return(
        <Routes>
            <Route path="/" element={<IndexPage />}>
                <Route index element={<Home />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/events/:eventId" element={<EventPresentation />} />
            </Route>
        </Routes>
    )
}

export default RouterManagement;