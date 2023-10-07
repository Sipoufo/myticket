import React from "react";
import { IoMdClose } from "react-icons/io";

const CreateEvent = ({ modalService, setShowOAuthModal }) => {
    return (
        <div
            className={`${
                modalService !== "createEvent" && "hidden"
            } h-screen md:h-auto flex flex-col text-center bg-white rounded-md shadow-md z-50 gap-2 w-11/12 sm:w-8/12 md:w-6/12 xl:w-5/12 overflow-hidden`}
        >
            <div className="flex flex-col bg-primary justify-between p-6 text-white text-start gap-2">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl font-semibold">MyTicket</h1>
                    <button onClick={() => setShowOAuthModal(false)}>
                        <IoMdClose className="text-2xl" />
                    </button>
                </div>
                <h2 className="text-lg font-medium">Create an event</h2>
                <p>
                    Get started with your new event on Eventy by providing some
                    details about it. You will be able to edit these later.
                </p>
            </div>
            <form className="flex flex-col mt-2 gap-4 p-6 text-start overflow-auto">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Event title */}
                    <div className="flex flex-col gap-1 w-full md:w-[47%]">
                        <label className="font-medium">Event title</label>
                        <input
                            type="text"
                            name="eventTitle"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Event title"
                        />
                    </div>
                    {/* Event Type */}
                    <div className="flex flex-col gap-1 w-full md:w-[47%]">
                        <label className="font-medium">Event type</label>
                        <select className="bg-white border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm">
                            <option>Online</option>
                            <option>Present</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Start Date & Time */}
                    <div className="flex flex-col gap-1 w-full md:w-[47%]">
                        <label className="font-medium">Start date & time</label>
                        <input
                            type="text"
                            name="start"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Start date & time"
                        />
                    </div>
                    {/* End Date & Time */}
                    <div className="flex flex-col gap-1 w-full md:w-[47%]">
                        <label className="font-medium">End date & time</label>
                        <input
                            type="text"
                            name="end"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="End date & time"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Category */}
                    <div className="flex flex-col gap-1 w-full md:w-[47%]">
                        <label className="font-medium">Event type</label>
                        <select className="bg-white border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm">
                            <option>Art</option>
                            <option>Business</option>
                            <option>Food</option>
                            <option>Music</option>
                            <option>Code</option>
                        </select>
                    </div>
                    {/* Location */}
                    <div className="flex flex-col gap-1 w-full md:w-[47%]">
                        <label className="font-medium">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Location"
                        />
                    </div>
                </div>
                <button className="w-auto px-4 py-3 bg-[#525266] text-white rounded-lg hover:bg-opacity-90 font-medium mt-4">
                    Create event
                </button>
            </form>
        </div>
    );
};

export default CreateEvent;
