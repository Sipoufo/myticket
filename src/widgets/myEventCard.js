import React, { useState } from "react";
import { Link } from "react-router-dom";
import deleteEventModal from "./deleteEventModal";

const MyEventCard = ({ id, image, title, time }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex flex-col  shadow-md  text-black my-2 border border-gray-200 text-start">
            <div className="h-40 relative flex">
                <img
                    src={process.env.PUBLIC_URL + image}
                    className="h-full w-full object-cover"
                    alt="myEventCard"
                />
                <div className="hover:hidden absolute flex flex-row justify-between items-center w-full h-full top-0 left-0 bg-black bg-opacity-60 text-white font-semibold px-6">
                    {/* <div className="flex flex-col gap-1">
                        <p>{totalSales}$</p>
                        <label>Total Sales</label>
                    </div>
                    <div className="flex flex-col gap-1 text-end">
                        <p>{ticketsSold} Ticket</p>
                        <label>Tickets Sold</label>
                    </div> */}
                </div>
            </div>
            <div className="relative pt-6 flex flex-col bg-white gap-3">
                <h1 className="text-sm font-semibold px-4">{title}</h1>
                <h2 className="text-xs px-4">{time}</h2>
                <div className="flex flex-row border-y text-gray-400">
                    <Link to={`/manageevent/${id}`} className="grow p-4 hover:text-primary hover:font-semibold">
                        Manage
                    </Link>
                    <hr className="border-l h-full" />
                    <Link to={`/events/${id}`} className="grow p-4 hover:text-primary hover:font-semibold">
                        View/Edit
                    </Link>
                    <hr className="border-l h-full" />
                    <button onClick={() => setShowModal(true)} className="grow p-4 hover:bg-red-600 hover:text-white hover:font-semibold">
                        Delete
                    </button>
                </div>
            </div>
            {showModal && (
                deleteEventModal({"title": title, "eventid": id, "setShowModal": setShowModal}))}
        </div>
    );
            };
export default MyEventCard;