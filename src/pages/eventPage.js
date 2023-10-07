import React, { useState } from "react";
import Header from "../components/header";
import Event from "../widgets/event";
import Footer from "../components/footer";

const EventPage = () => {
    const [eventType, setEventType] = useState("all");
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10">
            {/* Header */}
            <Header />

            {/* List of events */}
            <div className="flex justify-center">
                <div className="relative flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    {/* Categories */}
                    <div className="flex flex-row gap-2 items-center">
                        <label className="text-xl font-bold">
                            Événements populaires :
                        </label>
                        <select className="px-4 py-2 text-xl text-primary font-bold bg-white">
                            <option>On Line</option>
                        </select>
                    </div>
                    <ul className="flex flex-row gap-10 overflow-x-auto no-scrollbar">
                        <li className={`${eventType === "all" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("all")}>
                            All
                        </li>
                        <li className={`${eventType === "forYou" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("forYou")}>
                            For you
                        </li>
                        <li className={`${eventType === "thisDay" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("thisDay")}>
                            This day
                        </li>
                        <li className={`${eventType === "thisWeek" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("thisWeek")}>
                            This week
                        </li>
                        <li className={`${eventType === "nextWeek" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("nextWeek")}>
                            Next week
                        </li>
                        <li className={`${eventType === "art" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("art")}>
                            Art
                        </li>
                        <li className={`${eventType === "art" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("art")}>
                            Art
                        </li>
                        <li className={`${eventType === "art" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("art")}>
                            Art
                        </li>
                        <li className={`${eventType === "art" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("art")}>
                            Art
                        </li>
                        <li className={`${eventType === "art" && "text-primary border-b-2 border-primary"} font-semibold pb-4 cursor-pointer text-gray-600`} onClick={() => setEventType("art")}>
                            Art
                        </li>
                    </ul>
                    {/* Event Presentation Part */}
                    <Event />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EventPage;
