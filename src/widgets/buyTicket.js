import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BuyTicketService } from "../services/ticketService";
// import Loading from "../loading";

const BuyTicket = ({
    showBuyTicket,
    setShowBuyTicket,
    tickets,
    setError,
    setActiveAlert,
    setAlertMessage,
}) => {
    const [number_place, setNumber_place] = useState(0);
    const [ticketTypeId, setTicketTypeId] = useState("");
    const [maxPlace, setMaxPlace] = useState(0);
    const [ticketPrice, setTicketPrice] = useState(0);

    const payTicket = async (e) => {
        e.preventDefault();
        const data = await BuyTicketService(ticketTypeId, number_place);
        setShowBuyTicket(false);
        setActiveAlert(true);
        setError(data.isError);
        setAlertMessage(data.message);
    };

    return (
        <div
            className={`${
                !showBuyTicket && "hidden"
            } fixed w-screen h-screen left-0 top-0 z-40`}
        >
            <div className="relative w-full h-full flex justify-center items-center">
                <div
                    className="absolute w-full h-full bg-black bg-opacity-80"
                    onClick={() => setShowBuyTicket(false)}
                ></div>
                <div className="absolute flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12">
                    <button
                        className="absolute right-4 top-4"
                        onClick={() => setShowBuyTicket(false)}
                    >
                        <IoMdClose className="text-2xl" />
                    </button>
                    <h1 className="font-extrabold text-xl text-primary">
                        MyTicket
                    </h1>
                    <label className="text-base text-secondary font-semibold">
                        Buy Ticket
                    </label>
                    <form
                        className="flex flex-col mt-2 gap-4"
                        onSubmit={payTicket}
                    >
                        <input
                            type="text"
                            name="price"
                            className="w-full border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Total price"
                            value={"Total : " + ticketPrice * number_place}
                            disabled
                        />
                        <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                            <div className="w-full sm:w-1/2 flex flex-col gap-2">
                                <input
                                    type="number"
                                    name="numberPlace"
                                    className="w-full border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                                    placeholder="Number of places"
                                    value={number_place}
                                    max={maxPlace}
                                    min={0}
                                    onChange={(e) => {
                                        setNumber_place(e.target.value);
                                    }}
                                    required
                                />
                                <p> {maxPlace} max places </p>
                            </div>
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
                                {tickets.map((ticket) => {
                                    return (
                                        <option
                                            key={ticket["ticketId"]}
                                            value={ticket["ticketId"]}
                                            onClick={() => {
                                                setMaxPlace(
                                                    ticket["number_place"] -
                                                        ticket["users"].length
                                                );
                                                setTicketPrice(
                                                    ticket["price"] *
                                                        number_place
                                                );
                                            }}
                                        >
                                            {ticket["name"]}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="w-auto px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium">
                            Buy
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BuyTicket;
