import React, { useState } from "react";
import { FaBars, FaPlus } from "react-icons/fa6";
import { IoMdClose, IoMdLogOut } from "react-icons/io";
import Auth from "./auth/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [seeModal, setSeeModal] = useState(false);
    const [seeConnectModal, setConnectSeeModal] = useState(false);
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
                {/* <ul className="hidden md:flex flex-row gap-6 items-center">
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
                </ul> */}
                <div className="relative hidden md:flex justify-end">
                    <button
                        className="flex flex-row gap-2 items-center cursor-pointer"
                        onClick={() => setConnectSeeModal(!seeConnectModal)}
                    >
                        <span className="font-semibold text-xs">
                            SIPOUFO Yvan
                        </span>
                        <div className="h-8 w-8 rounded-full bg-[#3B3A62] border-2 border-white flex justify-center items-center font-semibold">
                            S
                        </div>
                    </button>
                    <div
                        className={`${
                            !seeConnectModal && "hidden"
                        } absolute flex flex-col w-80 h-[25rem] bg-white top-0 bottom-0 mt-14 text-black rounded-md shadow-2xl`}
                    >
                        {/* Information */}
                        <div className="flex flex-row gap-4 px-6 py-4 items-center">
                            <div className="h-14 w-14 rounded-full bg-[#3B3A62] flex justify-center items-center font-semibold text-white text-lg">
                                S
                            </div>
                            <div className="flex flex-col justify-between">
                                <h1 className="font-semibold">SIPOUFO Yvan</h1>
                                <p className="text-xs text-gray-400">
                                    sipjeux@gmail.com
                                </p>
                            </div>
                        </div>
                        {/* Create Event */}
                        <button className="flex flex-row bg-primary text-white px-6 py-4 justify-between">
                            <label>Create event</label>
                            <FaPlus />
                        </button>
                        {/* tMy Ticket */}
                        <button className="flex flex-row px-6 py-4 justify-between hover:bg-slate-200 hover:text-primary hover:font-semibold">
                            My Ticket
                        </button>
                        {/* My Ticket */}
                        <Link to='/myevents' className="flex flex-row px-6 py-4 justify-between hover:bg-slate-200 hover:text-primary hover:font-semibold">
                            My Events
                        </Link>
                        {/* My Ticket */}
                        <button className="flex flex-row px-6 py-4 justify-between hover:bg-slate-200 hover:text-primary hover:font-semibold">
                            Organizer Profile
                        </button>
                        {/* My Ticket */}
                        <button className="flex flex-row px-6 py-4 justify-between hover:bg-slate-200 hover:text-primary hover:font-semibold">
                            My Account
                        </button>
                        {/* My Ticket */}
                        <button className="flex flex-row px-6 py-4 justify-between border-t hover:bg-slate-200 hover:text-primary hover:font-semibold">
                            <label>Logout</label>
                            <IoMdLogOut className="text-gray-400 text-xl" />
                        </button>
                    </div>
                </div>
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
                                setSeeModal(false);
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
                                setSeeModal(false);
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
                                setSeeModal(false);
                                setModalService("createEvent");
                                setShowOAuthModal(true);
                            }}
                        >
                            Create event
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setSeeModal(false);
                            }}
                        >
                            My Ticket
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setSeeModal(false);
                            }}
                        >
                            My Events
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setSeeModal(false);
                            }}
                        >
                            Organizer Profile
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setSeeModal(false);
                            }}
                        >
                            My Account
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full hover:underline underline-offset-4"
                            onClick={() => {
                                setSeeModal(false);
                            }}
                        >
                            LogOut
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