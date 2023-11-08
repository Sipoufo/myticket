import React, { useState } from "react";
import { BiSolidDetail } from "react-icons/bi";
import { RiMoneyEuroCircleFill, RiSettings4Fill } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import DetailEvent from "./detailEvent";
import PaymentEvent from "./paymentEvent";
import TicketEvent from "./ticketEvent";
import SettingEvent from "./settingEvent";

const EditEvent = ({data, categories, seeEditPart, setSeeEditPart}) => {
    const [active, setActive] = useState("detail");

    return (
        <div className={`${!seeEditPart && "hidden"} z-30 fixed left-0 h-screen w-screen`}>
            <div className="relative h-full w-full">
                <div className="absolute w-full h-full bg-black bg-opacity-80" onClick={() => setSeeEditPart(false)}></div>
                <div className="absolute flex flex-row h-full">
                    {/* Navigation */}
                    <div className="z-10 bg-[#6669CC] flex flex-col text-white text-xs font-medium">
                        <div className="flex items-center h-14">
                            <a
                                href="/"
                                className="font-semibold text-base px-2"
                            >
                                MyTicket
                            </a>
                        </div>
                        <button className={`${active === "detail" && "bg-primary"} flex flex-col items-center hover:bg-primary py-3`} onClick={() => setActive("detail")}>
                            <BiSolidDetail className="text-2xl" />
                            <span>Details</span>
                        </button>
                        <button className={`${active === "payment" && "bg-primary"} flex flex-col items-center hover:bg-primary py-3`} onClick={() => setActive("payment")}>
                            <RiMoneyEuroCircleFill className="text-2xl" />
                            <span>Payments</span>
                        </button>
                        <button className={`${active === "ticket" && "bg-primary"} flex flex-col items-center hover:bg-primary py-3`} onClick={() => setActive("ticket")}>
                            <IoTicket className="text-2xl" />
                            <span>Tickets</span>
                        </button>
                        <button className={`${active === "setting" && "bg-primary"} flex flex-col items-center hover:bg-primary py-3`} onClick={() => setActive("setting")}>
                            <RiSettings4Fill className="text-2xl" />
                            <span>Setting</span>
                        </button>
                        <button className={`${active === "management" && "bg-primary"} flex flex-col items-center hover:bg-primary py-3`} onClick={() => setActive("management")}>
                            <VscSettings className="text-2xl" />
                            <span>Management</span>
                        </button>
                    </div>
                    {/* Details Part */}
                    <DetailEvent active={active} data={data} categories={categories} />
                    {/* Payment Part */}
                    <PaymentEvent active={active} />
                    {/* Ticket Part */}
                    <TicketEvent active={active} eventId={data["eventId"]} />
                    {/* Setting Part */}
                    <SettingEvent active={active} />
                </div>
            </div>
        </div>
    );
};

export default EditEvent;
