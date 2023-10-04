import React from "react";
import { Outlet } from "react-router-dom";

const IndexPage = () => {
    return (
        <div className="flex w-screen h-screen overflow-hidden font-poppins text-sm">
            <Outlet />
        </div>
    )
};

export default IndexPage;