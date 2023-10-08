import React from "react";
import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages";
import Home from "../pages/home";
import EventPage from "../pages/eventPage";
import EventPresentation from "../pages/eventPresentation";
import MyEvent from "../pages/myEvent";

const RouterManagement = () => {
    return(
        <Routes>
            <Route path="/" element={<IndexPage />}>
                <Route index element={<Home />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/events/:eventId" element={<EventPresentation />} />
                <Route path="/myevents" element={<MyEvent />} />
            </Route>
        </Routes>
    )
}

export default RouterManagement;