import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import Auth from "./auth/auth";

const Navbar = () => {
    const [seeModal, setSeeModal] = useState(false);
    const [showOAuthModal, setShowOAuthModal] = useState(false);
    const [modalService, setModalService] = useState("signIn");

    return (
        <>
            <div className="absolute top-0 w-full flex flex-row justify-between items-center px-10 md:px-20 lg:px-32 py-8 text-white">
                {/* Logo */}
                {/* <img src={process.env.PUBLIC_URL + "/logo.png"} className="w-20 object-cover" alt="bg_image_home"/> */}
                <a href="/" className="font-semibold text-2xl text-white">
                    MyTicket
                </a>
                <ul className="hidden md:flex flex-row gap-6 items-center">
                    <li>
                        <button
                            className="font-medium hover:underline underline-offset-4 hover:text-primary"
                            onClick={() => {
                                setModalService("signIn");
                                setShowOAuthModal(true);
                            }}
                        >
                            Sign up / Sign In
                        </button>
                    </li>
                    <button
                        className="w-auto px-4 py-3 bg-primary rounded-lg hover:bg-opacity-90"
                        onClick={() => {
                            setModalService("createEvent");
                            setShowOAuthModal(true);
                        }}
                    >
                        Create Event
                    </button>
                </ul>
                <button className="md:hidden" onClick={() => setSeeModal(true)}>
                    <FaBars className="text-xl" />
                </button>
            </div>

            {/* Menu for small screen */}
            <div
                className={`${
                    !seeModal && "hidden"
                } md:hidden fixed z-40 top-0 left-0 flex justify-center items-center w-screen h-screen overflow-hidden bg-white text-primary`}
            >
                <ul className="flex flex-col w-10/12 text-center text-lg font-semibold gap-6">
                    <li className="flex justify-end">
                        <button onClick={() => setSeeModal(false)}>
                            <IoMdClose className="text-2xl" />
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setModalService("signIn");
                                setShowOAuthModal(true);
                            }}
                        >
                            SignIn
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setModalService("signUp");
                                setShowOAuthModal(true);
                            }}
                        >
                            SignUp
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setModalService("createEvent");
                                setShowOAuthModal(true);
                            }}
                        >
                            Create event
                        </button>
                    </li>
                </ul>
            </div>

            {/* Login part */}
            <Auth
                showOAuthModal={showOAuthModal}
                setShowOAuthModal={setShowOAuthModal}
                modalService={modalService}
                setModalService={setModalService}
            />
        </>
    );
};

export default Navbar;
