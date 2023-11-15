import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Loading from "../components/loading";
import { IoTicketOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { GetUserName } from "../services/token";

const ManagerEvent = () => {
    const { eventId, isError, message } = useParams();
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [result, setResult] = useState(null);

    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 md:pb-0">
            {/* Header */}
            <div className="relative min-h-[60%] flex text-white">
                {/* Background image */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/images/bg2.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="bg_image_home"
                />
                <div className="absolute h-full w-full bg-gradient-to-t bg-primary to-transparent bg-opacity-70"></div>
                <div className="w-full h-full z-10 flex flex-col justify-center">
                    <Navbar />
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col gap-4 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            <div className="bg-[#6569CC] flex w-28 h-28 border-4 border-white rounded-md justify-center items-center text-5xl font-medium">
                                {GetUserName()[0]}
                            </div>
                            <h1 className="text-sm font-semibold">
                                {GetUserName()}
                            </h1>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                        <div className="flex flex-row justify-center items-center text-white px-4 w-full md:w-6/12 max-w-screen-xl">
                            <div className="flex flex-col gap-4 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                                <div className="bg-[#6569CC] flex w-16 h-16 border-2 border-white rounded-md justify-center items-center text-xl font-medium">
                                    0
                                </div>
                                <h1 className="text-sm font-semibold">
                                    Ticket sell
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                                <div className="bg-[#6569CC] flex w-16 h-16 border-2 border-white rounded-md justify-center items-center text-xl font-medium">
                                    0
                                </div>
                                <h1 className="text-sm font-semibold">
                                    Ticket sell
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                                <div className="bg-[#6569CC] flex w-16 h-16 border-2 border-white rounded-md justify-center items-center text-xl font-medium">
                                    0
                                </div>
                                <h1 className="text-sm font-semibold">
                                    Ticket sell
                                </h1>
                            </div>
                            <div className="flex flex-col gap-4 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                                <div className="bg-[#6569CC] flex w-16 h-16 border-2 border-white rounded-md justify-center items-center text-xl font-medium">
                                    0
                                </div>
                                <h1 className="text-sm font-semibold">
                                    Ticket sell
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ul className={`flex flex-row gap-10 no-scrollbar mx-10`}>
                <li
                    className={`font-semibold pb-1 cursor-pointer text-gray-600`}
                >
                    Drafted
                </li>
                <li
                    className={`font-semibold pb-1 cursor-pointer text-gray-600`}
                >
                    Published
                </li>
            </ul>

            {/* No Event */}
            <div className={`flex justify-center`}>
                <div className="h-96 flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl items-center justify-center">
                    <IoTicketOutline className="text-[10rem] text-gray-400" />
                    <p className="font-medium text-gray-600">
                        Oops, no events here!
                    </p>
                </div>
            </div>

            {/* <div className="flex flex-col items-center">
                <span className="text-sm">
                    Showing{" "}
                    <span className="font-semibold text-primary">
                        {pageNumber}
                    </span>{" "}
                    to{" "}
                    <span className="font-semibold text-primary">
                        {pageSize > result.dataNumber
                            ? result.dataNumber
                            : pageSize}
                    </span>{" "}
                    of{" "}
                    <span className="font-semibold text-primary">
                        {result.dataNumber}
                    </span>{" "}
                    Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button
                        className={`${
                            pageNumber === 1 && "cursor-not-allowed"
                        } flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-l hover:bg-gray-900`}
                        onClick={prevOnClick}
                    >
                        Prev
                    </button>
                    <button
                        className={`${
                            pageSize > result.dataNumber && "cursor-not-allowed"
                        } flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-l border-gray-700 rounded-r hover:bg-gray-900`}
                        onClick={nextOnClick}
                    >
                        Next
                    </button>
                </div>
            </div> */}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ManagerEvent;
