import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MyTicketCard from "../widgets/myTicketCard";
import { MyTicketsService } from "../services/ticketService";
import Loading from "../components/loading";
import { IoTicketOutline } from "react-icons/io5";
import TicketPrint from "../components/Ticket/ticketPrint";
const MyTicket = () => {
    // const [eventAction, setEventAction] = useState("actual");
    const [myTickets, setMyTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showTicket, setShowTicket] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState({});
    const hostUrl = window.location.hostname;

    const fetchMyTickets = async () => {
        const data = await MyTicketsService();
        // console.log(data);
        // console.log(data.data["data"]);
        setMyTickets(data.data["data"]);
    };

    useEffect(() => {
        fetchMyTickets();
        setLoading(false);
    }, []);
    // useEffect(() => {
    //     console.log(`Selection Ok is boy ${selectedTicket}`);
    // }, [selectedTicket]);

    if (loading) {
        <Loading />;
    }
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 md:pb-0">
            {/* Header */}
            <div className="relative min-h-[40%] flex text-white">
                {/* Background image */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/images/bg2.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="bg_image_home"
                />
                <div className="absolute h-full w-full bg-gradient-to-t bg-primary to-transparent bg-opacity-70"></div>
                <div className="w-full h-full z-10 flex flex-col justify-center">
                    <Navbar />
                    <div className="flex justify-center">
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-0 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            <h1 className="text-lg font-semibold">My ticket</h1>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                        <div className="flex flex-row items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            {/* Actual */}
                            {/* <button
                                className={`${
                                    eventAction === "actual" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-24 font-semibold`}
                                onClick={() => setEventAction("actual")}
                            >
                                Actual
                            </button> */}
                            {/* Past */}
                            {/* <button
                                className={`${
                                    eventAction === "past" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-24 font-semibold`}
                                onClick={() => setEventAction("past")}
                            >
                                Past
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* No Event */}
            {/* <div className="flex justify-center">
                <div className="h-96 flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl items-center justify-center">
                    <IoTicketOutline className="text-[10rem] text-gray-400" />
                    <p
                        className={`${
                            eventAction !== "actual" && "hidden"
                        } font-medium text-gray-600`}
                    >
                        Oops, no events here!
                    </p>
                    <p className={`${
                            eventAction !== "past" && "hidden"
                        } font-medium text-gray-600`}>
                        You have no tickets purchased.
                    </p>
                </div>
            </div> */}

            {/* Events */}
            <div className="flex justify-center">
                {
                    myTickets.length === 0 ? (
                        <div className="flex items-center justify-center">
                        <div className="h-96 flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl items-center justify-center">
                            <IoTicketOutline className="text-[10rem] text-gray-400" />
                            <p className="font-medium text-gray-600 text-center">
                                Oops, no tickets here!
                            </p>
                            <p className="text-2rem text-gray-300 text-center">
                            You have no tickets purchased.
                            </p>
                        </div>
                    </div>
                    ) : (
                        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                            {myTickets.map((myTicket) => {
                            console.log("myTicket");
                            console.log(myTicket);
                            return (
                                <MyTicketCard
                                eventId={myTicket["ticket"]["event"]["eventId"]}
                                image={"/assets/images/bg3.jpg"}
                                title={myTicket["ticket"]["name"]}
                                time={new Date(
                                    myTicket["ticket"]["event"]["startEvent"]
                                ).toDateString()}
                                ticketsSold={myTicket["ticket"]["price"]}
                                totalSales={myTicket["ticket"]["price"]}
                                showTicket={setShowTicket}
                                setSelectTicket={()=> setSelectedTicket(myTicket)}
                                />
                            );
                            })}
                        </div>
                    )
                }
                {showTicket && (
                    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    
                        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div class="relative transform overflow-hidden rounded-lg text-left  transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <TicketPrint
                                ticket={selectedTicket}
                                hostUrl={hostUrl}
                                showTicket={setShowTicket}
                                resetSelectedTicket={()=> setSelectedTicket({})}
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                )
                }
            </div>

            {/* Footer */}
            <Footer />
            
        </div>


        
    );
};

export default MyTicket;
