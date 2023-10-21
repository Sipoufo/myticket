import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import IndexPage from "../pages";
import Home from "../pages/home";
import EventPage from "../pages/eventPage";
import EventPresentation from "../pages/eventPresentation";
import MyEvent from "../pages/myEvent";
import MyTicket from "../pages/myTicket";
import OrganizerProfile from "../pages/organizerProfile";
import MyAccount from "../pages/myAccount";
import ManageEvent from "../pages/manageEvent";
import { GetToken } from "../services/token";

const RouterManagement = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />}>
                <Route index element={<Home />} />
                <Route path="/:token" element={<Home />} />
                <Route path="/events" element={<EventPage />} />
                <Route
                    path="/events/:eventId"
                    element={<EventPresentation />}
                />
                <Route path="/myevents" element={<MyEvent />} />
                <Route path="/mytickets" element={<MyTicket />} />
                <Route
                    path="/organizerprofile"
                    element={
                        GetToken() != null ? (
                            <OrganizerProfile />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
                <Route
                    path="/myaccount"
                    element={
                        GetToken() != null ? <MyAccount /> : <Navigate to="/" />
                    }
                />
                <Route
                    path="/manageevent"
                    element={
                        GetToken() != null ? (
                            <ManageEvent />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
            </Route>
        </Routes>
    );
};

export default RouterManagement;
