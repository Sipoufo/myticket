import React from "react";
import { FaTicket, FaEmpire, FaUser } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";

const Footer = () => {
    return (
        <div className="flex justify-center bg-third py-10 text-white pb-6">
            <div className="relative flex flex-col md:flex-row gap-6 px-4 w-full md:w-11/12 max-w-screen-xl justify-between">
                <div className="flex flex-col justify-between gap-4">
                    <h1 href="/" className="font-semibold text-2xl text-white">
                        CHAPCHAPTickets
                    </h1>
                    <div className="flex flex-col gap-2">
                        <p>Built by blackCode 😊</p>
                        <p>© 2023 Zeroqode. All rights reserved.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-10 md:gap-32">
                    {/* Company */}
                    {/* <ul className="flex flex-col gap-3">
                        <li className="mb-2">
                            <h1 className="text-base font-semibold">Company</h1>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Career
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Press
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Blog
                            </a>
                        </li>
                    </ul> */}
                    {/* Explore */}
                    {/* <ul className="flex flex-col gap-3">
                        <li className="mb-2">
                            <h1 className="text-base font-semibold">Explore</h1>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Technology
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Business
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Religion
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Music
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Food
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="hover:underline underline-offset-4"
                            >
                                Arts
                            </a>
                        </li>
                    </ul> */}
                    {/* Follow Us */}
                    <ul className="flex flex-col gap-3">
                        <li className="mb-2">
                            <h1 className=" font-semibold text-2xl">Go To</h1>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <IoMdHome className="text-lg" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/mytickets" className="flex gap-1 items-center">
                                <FaTicket className="text-lg" />
                                My Tickets
                            </a>
                        </li>
                        <li>
                            <a href="/myevents" className="flex gap-1 items-center">
                                <FaEmpire className="text-lg" />
                                My Events
                            </a>
                        </li>
                        <li>
                            <a href="/myaccount" className="flex gap-1 items-center">
                                <FaUser className="text-lg" />
                                My Account
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
