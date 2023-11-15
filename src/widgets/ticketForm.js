import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CreateTicketByEventId } from "../services/ticketService";
// import Loading from "../loading";

const TicketForm = ({
    showCreateTicket,
    setShowCreateTicket,
    ticketTypes,
    event_Id,
}) => {
    // const [loading, setLoading] = useState(false);

    const eventId = event_Id;
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [number_place, setNumber_place] = useState("");
    const [price, setPrice] = useState("");
    const [ticketTypeId, setTicketTypeId] = useState("");

    const createTicket = async (e) => {
        e.preventDefault();
        const input = {
            visibility: true,
            name,
            description,
            number_place,
            price,
            ticketTypeId,
        };
        const data = await CreateTicketByEventId(input, eventId);
        window.location.replace("/events/" + eventId + "/" + data.isError + "/" + data.message);
    };

    return (
        <div
            className={`${
                !showCreateTicket && "hidden"
            } fixed w-screen h-screen left-0 top-0 z-40`}
        >
            <div className="relative w-full h-full flex justify-center items-center">
                <div
                    className="absolute w-full h-full bg-black bg-opacity-80"
                    onClick={() => setShowCreateTicket(false)}
                ></div>
                <div className="absolute flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12">
                    <button
                        className="absolute right-4 top-4"
                        onClick={() => setShowCreateTicket(false)}
                    >
                        <IoMdClose className="text-2xl" />
                    </button>
                    <h1 className="font-extrabold text-xl text-primary">
                        MyTicket
                    </h1>
                    <label className="text-base text-secondary font-semibold">
                        Create Ticket
                    </label>
                    <p
                        className={`${
                            ticketTypes.length > 0 && "hidden"
                        } text-red-400`}
                    >
                        You can't create ticket now !
                    </p>
                    <form className="flex flex-col mt-2 gap-4" onSubmit={createTicket}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                            <input
                                type="text"
                                name="name"
                                className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                                placeholder="Ticket name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                                placeholder="Ticket price"
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                            <input
                                type="number"
                                name="numberPlace"
                                className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                                placeholder="Number of places"
                                onChange={(e) =>
                                    setNumber_place(e.target.value)
                                }
                                required
                            />
                            <select
                                className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                                onChange={(e) =>
                                    setTicketTypeId(e.target.value)
                                }
                                required
                            >
                                <option selected disabled>
                                    Choose one
                                </option>
                                {ticketTypes.map((ticketType) => {
                                    return (
                                        <option key={ticketType["ticketId"]} value={ticketType["ticketId"]}>
                                            {ticketType["name"]}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <textarea
                            className="w-full border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                        <button className={`${ticketTypes.length <= 0 && "cursor-not-allowed"} w-auto px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium`}>
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TicketForm;
