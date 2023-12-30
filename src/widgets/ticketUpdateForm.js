import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { UpdateOneTicket } from "../services/ticketService";


const TicketUpdateForm = ({
    showUpdateTicket,
    setShowUpdateTicket,
    ticketId,
    ticketType,
    ticketTypes,
    ticketName,
    ticketNumberPlace,  
    ticketDescription, 
    ticketPrice,
    eventId
}) => {
    const [ticket_Id, setTicket_Id] = useState(ticketId);
    const [event_Id, setEvent_Id] = useState(eventId);
    const [name, setName] = useState(ticketName);
    const [description, setDescription] = useState(ticketDescription);
    const [number_place, setNumber_place] = useState(ticketNumberPlace);
    const [price, setPrice] = useState(ticketPrice);
    const [ticketTypeId, setTicketTypeId] = useState("");
    const [ticket_Types, setTicket_Types] = useState(ticketTypes);

    const updateTicket = async (e) => {
        e.preventDefault();
        const updatedValue = {
            visibility: true,
            name: name,
            description: description,
            number_place: number_place,
            price: price,
            ticketTypeId: ticketTypeId,
        };
        console.log(updatedValue);
        const data = await UpdateOneTicket(updatedValue, ticket_Id);
        window.location.replace("/events/" + event_Id + "/" + data.isError + "/" + data.message);
    };

    useEffect(() => {
        setTicket_Id(ticketId);
        setEvent_Id(eventId);
        setName(ticketName);
        setDescription(ticketDescription);
        setNumber_place(ticketNumberPlace);
        setPrice(ticketPrice);
        setTicketTypeId(ticketType);
        setTicket_Types(ticketTypes);
    }, [ticketId,eventId,ticketName, ticketDescription, ticketNumberPlace, ticketPrice, ticketType, ticketTypes]);

    console.log(this);

    return (
        <div
            className={`${
                !showUpdateTicket && "hidden"
            } fixed w-screen h-screen left-0 top-0 z-40`}
        >
            <div className="relative w-full h-full flex justify-center items-center">
                <div
                    className="absolute w-full h-full bg-black bg-opacity-80"
                    onClick={() => setShowUpdateTicket(false)}
                ></div>
                <div className="absolute flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12">
                    <button
                        className="absolute right-4 top-4"
                        onClick={() => setShowUpdateTicket(false)}
                    >
                        <IoMdClose className="text-2xl" />
                    </button>
                    <h1 className="font-extrabold text-xl text-primary">
                        MyTicket
                    </h1>
                    <label className="text-base text-secondary font-semibold">
                        Update Ticket
                    </label>
                    <p
                        className={`${
                            ticketTypes.length > 0 && "hidden"
                        } text-red-400`}
                    >
                        You can't update ticket now !
                    </p>
                    <form className="flex flex-col mt-2 gap-4" onSubmit={updateTicket}>
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                            <input
                                type="text"
                                name="name"
                                className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                                placeholder="Ticket name"
                                value={name}
                                // defaultValue={ticketName}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                                placeholder="Ticket price"
                                value={price}
                                // defaultValue={price}
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
                                value={number_place}
                                // defaultValue={number_place}
                                min={1}
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
                                <option disabled selected>
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
                            value={description}
                            // defaultValue={ticketDescription}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                        <button className={`${ticketTypes.length <= 0 && "cursor-not-allowed"} w-auto px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium`}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};


export default TicketUpdateForm;

