import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MyEventCard from "../widgets/myEventCard";
import { FetchEventsByIsPublish } from "../services/eventService";
import Loading from "../components/loading";
import { IoTicketOutline } from "react-icons/io5";

const OrganizerProfile = () => {
    const [eventAction, setEventAction] = useState("drafted");
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [result, setResult] = useState(null);

    const fetchEventsByIsPublish = async (isPublish) => {
        await FetchEventsByIsPublish(isPublish, pageNumber, pageSize)
            .then((data) => {
                if (!data.isError) {
                    setResult(data["data"]);
                } else {
                    setResult(data["data"]);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        fetchEventsByIsPublish(false);
    }, [pageNumber, pageSize]);

    if (result == null) {
        return <Loading />;
    }
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 md:pb-0">
            {/* Header */}
            <div className="relative min-h-[60%] flex text-white">
                {/* Background image */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/images/bg2.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="bg_image_home"
                />
                <div className="absolute h-full w-full bg-gradient-to-t bg-primary to-transparent bg-opacity-70"></div>
                <div className="w-full h-full z-10 flex flex-col justify-center">
                    <Navbar />
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col gap-4 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            <div className="bg-[#6569CC] flex w-28 h-28 border-4 border-white rounded-md justify-center items-center text-5xl font-medium">
                                T
                            </div>
                            <h1 className="text-sm font-semibold">test test</h1>
                            <h1 className="text-sm">
                                {result.dataNumber} event
                                {result.dataNumber > 1 && "s"} {eventAction}
                            </h1>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                        <div className="flex flex-row justify-center items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            {/* Draft Event */}
                            <button
                                className={`${
                                    eventAction === "drafted" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-40 font-semibold`}
                                onClick={() => {
                                    setResult(null);
                                    setEventAction("drafted");
                                    setPageNumber(1);
                                    setPageSize(10);
                                    fetchEventsByIsPublish(false);
                                }}
                            >
                                Drafted
                            </button>
                            {/* Publish Event */}
                            <button
                                className={`${
                                    eventAction === "published" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-40 font-semibold`}
                                onClick={() => {
                                    setResult(null);
                                    setEventAction("published");
                                    setPageNumber(1);
                                    setPageSize(10);
                                    fetchEventsByIsPublish(true);
                                }}
                            >
                                Published
                            </button>
                            {/* Past Events */}
                            <button
                                className={`${
                                    eventAction === "pasted" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-40 font-semibold`}
                                onClick={() => setEventAction("pasted")}
                            >
                                Pasted
                            </button>
                            {/* Upcoming Events */}
                            <button
                                className={`${
                                    eventAction === "upcoming" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-40 font-semibold`}
                                onClick={() => setEventAction("upcoming")}
                            >
                                Upcoming
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* No Event */}
            <div
                className={`${
                    result.dataNumber > 0 && "hidden"
                } flex justify-center`}
            >
                <div className="h-96 flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl items-center justify-center">
                    <IoTicketOutline className="text-[10rem] text-gray-400" />
                    <p
                        className="font-medium text-gray-600"
                    >
                        Oops, no events here!
                    </p>
                </div>
            </div>

            {/* Events */}
            <div
                className={`${
                    result.dataNumber === 0 && "hidden"
                } flex justify-center`}
            >
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    {result["data"].map((event) => {
                        return (
                            <MyEventCard
                                key={event["eventId"]}
                                id={event["eventId"]}
                                image={"/assets/images/bg3.jpg"}
                                title={event["name"]}
                                time={new Date(
                                    event["startEvent"]
                                ).toUTCString()}
                                ticketsSold={0}
                                totalSales={0}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <span className="text-sm">
                    Showing <span className="font-semibold text-primary">{pageNumber}</span> to{" "}
                    <span className="font-semibold text-primary">{pageSize > result.dataNumber ? result.dataNumber : pageSize }</span> of{" "}
                    <span className="font-semibold text-primary">{result.dataNumber}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-l hover:bg-gray-900">
                        Prev
                    </button>
                    <button className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-l border-gray-700 rounded-r hover:bg-gray-900">
                        Next
                    </button>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default OrganizerProfile;
