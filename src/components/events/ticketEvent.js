import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const TicketEvent = ({ active }) => {
    return (
        <div
            className={`${
                active !== "ticket" && "hidden"
            } flex flex-col w-full md:w-80 h-full bg-white animate-wiggle`}
        >
            <div className="flex flex-row justify-between items-center py-4 px-4 text-gray-600 text-base font-medium border-b">
                <label>Tickets</label>
                <IoArrowBackOutline />
            </div>
            <form className="flex flex-col py-4 overflow-y-auto px-4 gap-4 text-xs">
                <span className="text-gray-600 font-medium text-sm">
                    Events Tickets
                </span>
                <p>Create and manage paid tickets, free tickets & donations.</p>
                <button className="flex flex-row justify-between items-start border p-3 hover:bg-gray-100">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-medium">ticket_name</h1>
                        <p>Free (10 left)</p>
                    </div>
                    <button>
                        <MdEdit className="text-xl text-gray-600" />
                    </button>
                </button>
                <button
                    type="submit"
                    className="w-auto flex justify-center items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium"
                >
                    <FaPlus />
                    <label>Free Ticket</label>
                </button>
                <button
                    type="submit"
                    className="w-auto flex justify-center items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium"
                >
                    <FaPlus />
                    <label>Paid Ticket</label>
                </button>
                <button
                    type="submit"
                    className="w-auto flex justify-center items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium"
                >
                    <FaPlus />
                    <label>Donation</label>
                </button>
            </form>
        </div>
    );
};

export default TicketEvent;
