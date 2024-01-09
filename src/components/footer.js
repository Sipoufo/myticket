import React from "react";
import { FaSquareFacebook, FaSquareTwitter, FaSquareYoutube, FaSquarePinterest, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="flex justify-center bg-third py-10 text-white pb-6">
            <div className="relative flex flex-col md:flex-row gap-6 px-4 w-full md:w-11/12 max-w-screen-xl justify-between">
                <div className="flex flex-col justify-between gap-4">
                    <h1 href="/" className="font-semibold text-3xl text-white">
                        CHAPCHAPTickes
                    </h1>
                    <div className="flex flex-col gap-2">
                        <p>Built by blackCode 😊</p>
                        <p>© 2023 Zeroqode. All rights reserved.</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-32">
                    {/* Company */}
                    <ul className="flex flex-col gap-3">
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
                    </ul>
                    {/* Explore */}
                    <ul className="flex flex-col gap-3">
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
                    </ul>
                    {/* Follow Us */}
                    <ul className="flex flex-col gap-3">
                        <li className="mb-2">
                            <h1 className="text-base font-semibold">Follow Us</h1>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquareFacebook className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquareTwitter className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquareYoutube className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaSquarePinterest className="text-lg" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex gap-1 items-center">
                                <FaInstagram className="text-lg" />
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
