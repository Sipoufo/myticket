import React from "react";
import Navbar from "./navbar";

const Header = ({ token }) => {
    return (
        <div className="relative min-h-screen md:min-h-[70%] flex text-white">
            {/* Background image */}
            <img
                src={process.env.PUBLIC_URL + "/assets/images/bg1.jpg"}
                className="absolute h-full w-full object-cover"
                alt="bg_image_home"
            />
            <div className="absolute h-full w-full bg-black bg-opacity-60"></div>
            <div className="w-full h-full z-10 flex flex-col justify-center">
                <Navbar token={token} />
                <div className="flex justify-center">
                    <div className="flex flex-grow flex-col gap-6 items-center justify-center px-4 w-10/12 md:w-8/12 max-w-screen-xl">
                        <p className="text-3xl font-bold">
                            Discover events across the world
                        </p>
                        <form className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 text-black overflow-hidden gap-y-4">
                            {/* Search item */}
                            <div className="flex border-x border-gray-200 w-full sm:col-span-3 md:col-span-2 bg-white rounded-l-lg rounded-r-lg md:rounded-r-none overflow-hidden">
                                <input
                                    type="search"
                                    placeholder="Search item"
                                    className="px-2 py-4 text-sm font-normal text-blue-gray-700 outline outline-0 placeholder-shown:border-blue-gray-200 focus:outline-0 disabled:border-0 w-full"
                                />
                            </div>
                            <div className="flex flex-row w-full col-span-2 bg-white rounded-lg sm:rounded-r-none md:rounded-l-none overflow-hidden">
                                {/* Location */}
                                <div className="flex border-x border-gray-200 w-1/2">
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="px-2 py-4 text-sm font-normal text-blue-gray-700 outline outline-0 placeholder-shown:border-blue-gray-200 focus:outline-0 disabled:border-0 w-full"
                                    />
                                </div>
                                {/* Type of time */}
                                <div className="flex border-x border-gray-200 w-1/2 bg-white">
                                    <select
                                        data-te-select-init
                                        className="px-2 py-4 text-sm font-normal text-blue-gray-700 outline outline-0 placeholder-shown:border-blue-gray-200 focus:outline-0 disabled:border-0 w-full bg-white"
                                    >
                                        <option>All time</option>
                                        <option>Today</option>
                                        <option>Tomorrow</option>
                                        <option>This week</option>
                                    </select>
                                </div>
                            </div>
                            {/* Event type */}
                            <div className="flex border-x border-gray-200 w-full bg-white rounded-lg sm:rounded-l-none lg:rounded-r-none overflow-hidden">
                                <select
                                    data-te-select-init
                                    className="px-2 py-4  text-sm font-normal text-blue-gray-700 outline outline-0 placeholder-shown:border-blue-gray-200 focus:outline-0 disabled:border-0 w-full bg-white"
                                >
                                    <option>Online</option>
                                    <option>Presential</option>
                                </select>
                            </div>
                            {/* Event type */}
                            <div className="flex border-gray-200 w-full bg-white col-span-full lg:col-span-1 md:rounded-l-lg lg:rounded-l-none rounded-r-lg overflow-hidden">
                                <button className="text-white px-6 py-3 bg-primary w-full hover:bg-opacity-90">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
