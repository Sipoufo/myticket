import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FiHeart, FiUpload } from "react-icons/fi";
import EditEvent from "../components/events/editEvent";
import { FetchOneEvent, PublishEventService } from "../services/eventService";
import Loading from "../components/loading";
import { GetUserId } from "../services/token";
import { FetchAllCategories } from "../services/categoryService";
import AlertMessage from "../widgets/alert";
import BuyTicket from "../widgets/buyTicket";
import {
    FetchAllTicketByEventId,
    FetchTicketByEventId,
} from "../services/ticketService";
import { GetToken } from "../services/token";

import ShareModal from "../components/events/shareModal";

const EventPresentation = () => {
    const { eventId, isError, message } = useParams();
    const [seeEditPart, setSeeEditPart] = useState(false);
    const [result, setResult] = useState(null);
    const [myTickets, setMyTickets] = useState([]);
    const [categories, setCategories] = useState(null);
    const [activeAlert, setActiveAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(isError);
    const [tickets, setTickets] = useState([]);
    const [showBuyTicket, setShowBuyTicket] = useState(false);
    const [alertMessage, setAlertMessage] = useState(message);

    const [showShare, setShowShare] = useState(false);

    const FetchEventById = (EventId) => {
        const res = FetchOneEvent(EventId);
        res.then((data) => {
            if (!data.isError) {
                setResult(data["data"]);
            } else {
                // setResult(data["data"]);
                window.location.replace("/");
            }
        }).catch((e) => {
            console.log(e);
        });
    };

    const fetchCategories = async () => {
        const data = await FetchAllCategories();
        setCategories(data);
    };

    const fetchMyTicket = async (eventId) => {
        if (GetToken() !== null) {
            const data = await FetchTicketByEventId(eventId);
            setMyTickets(data.data["tickets"]);
        }
    };

    const publishEvent = async (e, eventId, isPublish) => {
        let message;
        e.preventDefault();
        setLoading(true);
        console.log(isPublish);
        const data = await PublishEventService(eventId, isPublish);
        if (data.isError) {
            console.log("data")
            console.log(data)
            message = `
                ${data.message} :
                ${data.data["missingFields"].map((out) => {
                    return out;
                })}
            `;
            setActiveAlert(true);
            setError(data.isError);
            setAlertMessage(message);
            setLoading(false);
        } else {
            // message = data.message;
            window.location.reload(false);
        }
    };

    const fetchTickets = async (eventId) => {
        if (GetToken() !== null) {
            const data = await FetchAllTicketByEventId(eventId);
            setTickets(data.data["data"]);
        }
    };

    const currentUrl = window.location.href;

    

    useEffect(() => {
        FetchEventById(eventId);
        fetchCategories();
        fetchTickets(eventId);
        fetchMyTicket(eventId);
        

        if (isError && message) {
            setActiveAlert(true);
        }
    }, [eventId, isError, message]);

    if (result == null || categories == null || tickets == null || loading) {
        return <Loading />;
    }
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 sm:pb-0">
            
            {/* Header */}
            <div className="relative min-h-screen md:min-h-[80%] flex text-white">
                {/* Background image */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/images/bg2.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="bg_image_home"
                />
                <div className="absolute h-full w-full bg-gradient-to-t bg-primary to-transparent bg-opacity-70"></div>
                <div className="w-full h-full z-10 flex flex-col justify-center">
                    <Navbar />
                    {GetToken() !== null && (
                        
                            <button
                        className={`${
                            result["organizer"]["userId"].toString() !==
                                GetUserId() && "hidden"
                        } z-10 fixed left-0 top-auto bottom-auto px-6 py-3 bg-emerald-400 text-base font-semibold -rotate-90 -translate-x-10`}
                        onClick={() => setSeeEditPart(true)}
                    >
                        Edit Event
                    </button>
                    )}
                    
                    <div className="flex justify-center">
                        
                        <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            {/* Information */}
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-3xl font-bold">
                                        {result["name"]}
                                    </h1>
                                    <h2 className="font-semibold mt-2">
                                        {new Date(
                                            result["startEvent"]
                                        ).toDateString()}{" "}
                                        <span className="text-lg font-semibold">
                                            to
                                        </span>{" "}
                                        {new Date(
                                            result["endEvent"]
                                        ).toDateString()}
                                    </h2>
                                    <h3 className="font-medium text-gray-300">
                                        {new Date(
                                            result["startEvent"]
                                        ).toLocaleTimeString()}{" "}
                                        -{" "}
                                        {new Date(
                                            result["endEvent"]
                                        ).toLocaleTimeString()}
                                    </h3>
                                    <h2 className="font-semibold mt-2">
                                        {result["location"]}    
                                    </h2>
                                </div>
                                {/* User */}
                                <div className="flex flex-row items-center gap-2">
                                    <div className="h-14 w-14 rounded-full bg-[#3B3A62] border-4 border-white flex justify-center items-center text-xl font-semibold">
                                        {result["organizer"]["firstName"][0]}
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs">
                                        <label>Organized by:</label>
                                        <h1 className="font-medium">
                                            {result["organizer"]["firstName"]}{" "}
                                            {result["organizer"]["lastName"]}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            {/* Picture */}
                            
                                <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/bg2.jpg"
                                }
                                className="h-4/6 w-8/12 md:w-6/12 object-cover border-4 border-white rounded-sm shadow-2xl"
                                alt="bg_image_home"
                            /> 
                            
                              
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative flex flex-col md:flex-row gap-6 px-4 w-full md:w-10/12 max-w-screen-xl items-center md:items-start">
                    <div className="flex flex-col gap-4 w-full md:w-6/12">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold">Description</h1>
                            <p className="text-gray-500">
                                {result["description"]
                                    ? result["description"]
                                    : "No description added"}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-normal">
                                Politique de confidentialité
                            </h1>
                            <p className="text-gray-500">
                                Communiquer avec l'organisateur pour demander un
                                remboursement.
                            </p>
                        </div>
                    </div>
                    
                    {GetToken() !== null && (
                        <div className="fixed bottom-0 z-10 sm:relative flex flex-grow flex-col items-end justify-start bg-white w-full sm:w-auto h-44 md:h-auto overflow-auto">
                        <div className="flex flex-col gap-4 px-4 py-6 w-full sm:w-80 rounded-lg border">
                            <div className="flex flex-row justify-between items-center">
                                <button className="w-10 h-10 rounded-full border border-black flex justify-center items-center bg-white hover:bg-gray-100">
                                    <FiUpload className="text-lg" />
                                </button>
                                {/* <p className="font-semibold">
                                    À partir de 10.24$
                                </p> */}
                                <button
                                    className={`w-10 h-10 rounded-full border border-black flex justify-center items-center bg-white hover:bg-gray-100`}
                                >
                                    <FiHeart className="text-lg" />
                                </button>
                            </div>

                            
                            <button
                                className={`${
                                    result["organizer"]["userId"].toString() !==
                                        GetUserId() && "hidden"
                                } w-full ${
                                    result["published"]
                                        ? "bg-rose-400"
                                        : "bg-emerald-400"
                                } px-4 py-2 text-lg text-white font-semibold rounded-sm`}
                                onClick={(e) =>
                                    publishEvent(
                                        e,
                                        eventId,
                                        !result["published"]
                                    )
                                }
                            >
                                {result["published"] ? "Unpublish" : "Publish"}
                            </button>
                            
                            
                            
                            {tickets.length > 0 ? (
                                <button
                                    className={`${
                                        result["organizer"][
                                            "userId"
                                        ].toString() !== GetUserId()
                                            ? ""
                                            : "hidden"
                                    } w-full bg-primary px-4 py-2 text-lg text-white font-semibold rounded-sm`}
                                    onClick={() => setShowBuyTicket(true)}
                                >
                                    buy ticket
                                </button>
                            ) : (
                                <button
                                    className={`${
                                        result["organizer"][
                                            "userId"
                                        ].toString() !== GetUserId()
                                            ? ""
                                            : "hidden"
                                    } w-full bg-rose-400 px-4 py-2 text-lg text-white font-semibold rounded-sm`}
                                >
                                    No Ticket
                                </button>
                            )}
                            {myTickets.map((ticket) => {
                                return (
                                    <button
                                        key={ticket["ticketId"]}
                                        className="flex flex-row justify-between items-start border p-3 hover:bg-gray-100"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <h1 className="font-medium">
                                                {ticket["ticket"]["name"]}{" "}
                                            </h1>
                                            <p>
                                                ({ticket["ticketNumber"]} ticket
                                                {ticket["number_place"] > 0
                                                    ? "s"
                                                    : ""}{" "}
                                                buy )
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    )}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    {/* header */}
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-xl font-bold">Others events</h1>
                    </div>
                    {/* <Event /> */}
                </div>
            </div>

            {/* Footer */}
            <Footer />
            {result["organizer"]["userId"].toString() === GetUserId() && (
                <EditEvent
                    data={result}
                    categories={categories}
                    seeEditPart={seeEditPart}
                    setSeeEditPart={setSeeEditPart}
                />
            )}

            {tickets.length > 0 && (
                <BuyTicket
                    setShowBuyTicket={setShowBuyTicket}
                    showBuyTicket={showBuyTicket}
                    tickets={tickets}
                    setError={setError}
                    setActiveAlert={setActiveAlert}
                    setAlertMessage={setAlertMessage}
                />
            )}

            <AlertMessage
                isActive={activeAlert}
                title={error === "true" || error === true ? "Error" : "Success"}
                message={alertMessage}
                setIsActive={setActiveAlert}
                isError={error === "true" || error === true}
            />
            <ShareModal
            shareUrl={"https://www.npmjs.com/package/react-share"}
            title={result["name"]}
            />

        </div>
    );
};

export default EventPresentation;
