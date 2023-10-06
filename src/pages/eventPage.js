import React from "react";
import Header from "../components/header";
import Event from "../widgets/event";
import Footer from "../components/footer";

const EventPage = () => {
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
                        <li className="text-primary font-semibold pb-4 border-b-2 border-primary cursor-pointer">
                            Tous
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            For you
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            This day
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            This week
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            Next week
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            Art
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            Art
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            Art
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
                            Art
                        </li>
                        <li className="text-gray-600 font-semibold pb-4 cursor-pointer">
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
