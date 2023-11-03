import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MyTicketCard from "../widgets/myTicketCard";

const MyTicket = () => {
    const [eventAction, setEventAction] = useState("actual");
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 md:pb-0">
            {/* Header */}
            <div className="relative min-h-[40%] flex text-white">
                {/* Background image */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/images/bg2.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="bg_image_home"
                />
                <div className="absolute h-full w-full bg-gradient-to-t bg-primary to-transparent bg-opacity-70"></div>
                <div className="w-full h-full z-10 flex flex-col justify-center">
                    <Navbar />
                    <div className="flex justify-center">
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-0 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            <h1 className="text-lg font-semibold">My ticket</h1>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                        <div className="flex flex-row items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            {/* Actual */}
                            <button
                                className={`${
                                    eventAction === "actual" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-24 font-semibold`}
                                onClick={() => setEventAction("actual")}
                            >
                                Actual
                            </button>
                            {/* Past */}
                            <button
                                className={`${
                                    eventAction === "past" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-24 font-semibold`}
                                onClick={() => setEventAction("past")}
                            >
                                Past
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* No Event */}
            {/* <div className="flex justify-center">
                <div className="h-96 flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl items-center justify-center">
                    <IoTicketOutline className="text-[10rem] text-gray-400" />
                    <p
                        className={`${
                            eventAction !== "actual" && "hidden"
                        } font-medium text-gray-600`}
                    >
                        Oops, no events here!
                    </p>
                    <p className={`${
                            eventAction !== "past" && "hidden"
                        } font-medium text-gray-600`}>
                        You have no tickets purchased.
                    </p>
                </div>
            </div> */}

            {/* Events */}
            <div className="flex justify-center">
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    <MyTicketCard image={"/assets/images/bg3.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} ticketsSold={0} totalSales={0} />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MyTicket;
