import React from "react";
import Button from "./button";

const Header = () => {
    return (
        <div className="absolute top-0 w-full flex flex-row justify-between items-center px-10 md:px-20 lg:px-32 py-8 text-white">
            {/* Logo */}
            {/* <img src={process.env.PUBLIC_URL + "/logo.png"} className="w-20 object-cover" alt="bg_image_home"/> */}
            <a href="/" className="font-semibold text-2xl text-white">MyTicket</a>
            <ul className="flex flex-row gap-6 items-center">
                <li><a href="/" className="font-medium hover:underline underline-offset-4 hover:text-primary">Sign up / Sign In</a></li>
                <Button title="Create Event" />
            </ul>
        </div>
    )
};

export default Header;