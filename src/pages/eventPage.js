import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/header";
import Event from "../widgets/event";
import Footer from "../components/footer";
import {
    FetchAllEvents,
    FetchEventsByCategoryId,
} from "../services/eventService";
import Loading from "../components/loading";
import { FetchAllCategories } from "../services/categoryService";

const EventPage = () => {
    const { categoryId } = useParams();
    const [eventType, setEventType] = useState("all");
    const [result, setResult] = useState(null);
    const [categories, setCategories] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 20;


    const fetchEvents = async (pageNumber, pageSize) => {
        const data = await FetchAllEvents(pageNumber, pageSize);
            setResult(data["data"]);
    };

    const fetchEventsByCategoryId = async (eventType, pageNumber, pageSize) => {
            const data = await FetchEventsByCategoryId(eventType, pageNumber, pageSize);
            setResult(data["data"]);
    };

    const fetchCategories = async () => {
        await FetchAllCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((e) => {});
    };

    useEffect(() => {
        fetchEvents(pageNumber, pageSize);
        fetchCategories();
    }, [pageNumber, pageSize]);

    useEffect(() => {
        console.log(eventType);
        if(eventType !== "all"){
            fetchEventsByCategoryId(eventType, pageNumber, pageSize);
        }else{
            fetchEvents(pageNumber, pageSize);
        }
        
    }, [eventType, pageNumber, pageSize]);
    useEffect(() => {
        if (categoryId) {
            setEventType(categoryId);
        }
    }, [categoryId]);

    const prevOnClick = (e) => {
        e.preventDefault();
        setResult(null);
        setPageNumber(pageNumber - 1);
        fetchEvents(pageNumber - 1, pageSize);
    }

    const nextOnClick = (e) => {
        e.preventDefault();
        setResult(null);
        setPageNumber(pageNumber + 1);
        fetchEvents(pageNumber + 1, pageSize);
    }

    if (result == null || categories == null) {
        return <Loading />;
    }
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10">
            {/* Header */}
            <Header />

            {/* List of events */}
            <div className="flex justify-center">
                <div className="relative flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    {/* Categories */}
                    <div className="flex flex-row gap-2 items-center">
                        <label className="text-xl font-bold">
                            Événements populaires :
                        </label>
                        <select className="px-4 py-2 text-xl text-primary font-bold bg-white">
                        <option selected disabled value="">Select event type</option>
                        <option value="OnLine">OnLine</option>
                        <option value="Presential">Presential</option>
                        </select>
                    </div>
                    <ul className="flex flex-row gap-10 overflow-x-auto no-scrollbar">
                        <li
                            className={`${
                                eventType === "all" &&
                                "text-primary border-b-2 border-primary"
                            } font-semibold pb-4 cursor-pointer text-gray-600`}
                            onClick={() => {
                                // setResult(null);
                                // fetchEvents();
                                setEventType("all");
                            }}
                        >
                            All
                        </li>
                        {/* {categories["data"].map((input) => {
                            return (
                                <li
                                    key={input.categoryId}
                                    className={`${
                                        eventType === input.categoryId &&
                                        "text-primary border-b-2 border-primary"
                                    } font-semibold pb-4 cursor-pointer text-gray-600`}
                                    onClick={() => {
                                        // setResult(null);
                                        // fetchEventsByCategoryId(
                                        //     input.categoryId
                                        // );
                                        setEventType(input.categoryId);
                                    }}
                                >
                                    {input.name}
                                </li>
                            );
                        })} */}
                        {categories["data"].map((input) => {
                            return (
                                
                                <li
                                    key={input.categoryId}
                                    className={`${
                                        (eventType === input.categoryId || categoryId === input.categoryId) &&
                                        "text-primary border-b-2 border-primary"
                                    } font-semibold pb-4 cursor-pointer text-gray-600`}
                                    onClick={() => {
                                        // setResult(null);
                                        // fetchEventsByCategoryId(
                                        //     input.categoryId
                                        // );
                                        setEventType(input.categoryId);
                                    }}
                                >
                                    {input.name}
                                </li>
                            
                            );
                        })}
                    </ul>
                    {/* Event Presentation Part */}
                    <Event data={result["data"]} />

                    {/* Pagination */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm">
                            Showing{" "}
                            <span className="font-semibold text-primary">
                                {pageNumber}
                            </span>{" "}
                            to{" "}
                            <span className="font-semibold text-primary">
                                {pageSize > result.dataNumber
                                    ? result.dataNumber
                                    : pageSize}
                            </span>{" "}
                            of{" "}
                            <span className="font-semibold text-primary">
                                {result.dataNumber}
                            </span>{" "}
                            Entries
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                className={`${
                                    pageNumber <= 1 && "cursor-not-allowed pointer-events-none"
                                } flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary rounded-l hover:bg-gray-900`}
                                onClick={prevOnClick}
                            >
                                Prev
                            </button>
                            <button
                                className={`${
                                    pageSize >= result.dataNumber &&
                                    "cursor-not-allowed pointer-events-none"
                                } flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-primary border-0 border-l border-gray-700 rounded-r hover:bg-gray-900`}
                                onClick={nextOnClick}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EventPage;
