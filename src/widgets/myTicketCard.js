import React from "react";
import { Link } from "react-router-dom";

const MyTicketCard = ({ eventId, image, title, time, totalSales, ticketsSold }) => {
    console.log("name => " + title)
    return (
        <div className="flex flex-col  shadow-md  text-black my-2 border border-gray-200 text-start">
            <div className="h-40 relative flex">
                <img
                    src={process.env.PUBLIC_URL + image}
                    className="h-full w-full object-cover"
                    alt="myEventCard"
                />
            </div>
            <div className="relative pt-6 flex flex-col bg-white gap-3">
                <h1 className="text-sm font-semibold px-4">{title}</h1>
                <h2 className="text-xs px-4">{time}</h2>
                <h2 className="text-xs px-4">Price: {ticketsSold}</h2>
                <div className="flex flex-row border-y text-gray-400">
                    <Link to={`/events/${eventId}`} className="grow p-4 hover:text-primary hover:font-semibold text-center">
                        View
                    </Link>
                    <hr className="border-l h-full" />
                    <button className="grow p-4 hover:bg-red-600 hover:text-white hover:font-semibold">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyTicketCard;
