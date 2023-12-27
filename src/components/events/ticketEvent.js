import React, { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Loading from "../loading";
import { FetchAllTicketByEventId } from "../../services/ticketService";
import { FetchAllTicketTypes } from "../../services/ticketTypeService";
import TicketForm from "../../widgets/ticketForm";
import TicketUpdateForm from "../../widgets/ticketUpdateForm";
const TicketEvent = ({ active, eventId }) => {
    const [tickets, setTickets] = useState([]);
    const [ticketTypes, setTicketTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCreateTicket, setShowCreateTicket] = useState(false);
    const [showUpdateTicket, setShowUpdateTicket] = useState(false);
    const [currentTicket, setCurrentTicket] = useState({});

    const fetchTickets = async () => {
        const data = await FetchAllTicketByEventId(eventId);
        setTickets(data.data["data"]);
    };

    const fetchTicketTypes = async () => {
        const data = await FetchAllTicketTypes();
        setTicketTypes(data.data);
    };

    useEffect(() => {
        fetchTickets();
        fetchTicketTypes();
        setLoading(false);
    }, [eventId]);

    if (loading) {
        <Loading />;
    }
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
            <div className="flex flex-col py-4 overflow-y-auto px-4 gap-4 text-xs">
                <span className="text-gray-600 font-medium text-sm">
                    Events Tickets
                </span>
                <p>Create and manage paid tickets, free tickets & donations.</p>
                <button
                    type="submit"
                    className="w-auto flex justify-center items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium"
                    onClick={() => setShowCreateTicket(true)}
                >
                    <FaPlus />
                    <label>Create Ticket</label>
                </button>
                {tickets.map((ticket) => {
                    return (
                        <button
                            key={ticket["ticketId"]}
                            className="flex flex-row justify-between items-start border p-3 hover:bg-gray-100"
                        >
                            <div className="flex flex-col gap-2">
                                <h1 className="font-medium">
                                    {ticket["name"]}{" "}
                                </h1>
                                {/* <p>Free ({ticket["number_place"] - ticket["users"].length} left)</p> */}
                                <p>
                                    Free ({ticket["number_place"]} place
                                    {ticket["number_place"] > 0 ? "s" : ""})
                                </p>
                            </div>
                            <button
                            onClick={() => 
                                {
                                    setCurrentTicket(ticket);
                                    setShowUpdateTicket(true);
                                }
                                 } >
                                <MdEdit className="text-xl text-gray-600" />
                            </button>
                        </button>                        
                    );
                })}

                {/* <button
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
                </button> */}
            </div>
            <TicketForm
                showCreateTicket={showCreateTicket}
                setShowCreateTicket={setShowCreateTicket}
                ticketTypes={ticketTypes}
                event_Id={eventId}
            />
            <TicketUpdateForm
                showUpdateTicket={showUpdateTicket}
                setShowUpdateTicket={setShowUpdateTicket}
                ticketId={currentTicket["ticketId"]}
                ticketTypes={ticketTypes}
                ticketName={currentTicket["name"]}
                ticketPrice={currentTicket["price"]}
                ticketNumberPlace={currentTicket["number_place"]}
                ticketDescription={currentTicket["description"]}
                eventId={eventId}
            />
            
        </div>
    );
};

export default TicketEvent;
