import React, { useEffect, useState } from "react";
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
    const [eventType, setEventType] = useState("all");
    const [result, setResult] = useState(null);
    const [categories, setCategories] = useState(null);

    const fetchEvents = async () => {
        await FetchAllEvents(1, 8)
            .then((data) => {
                if (!data.isError) {
                    setResult(data["data"]["data"]);
                } else {
                    setResult(data["data"]);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const fetchEventsByCategoryId = async (categoryId) => {
        await FetchEventsByCategoryId(categoryId, 1, 8)
            .then((data) => {
                if (!data.isError) {
                    setResult(data["data"]["data"]);
                } else {
                    setResult(data["data"]);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const fetchCategories = async () => {
        await FetchAllCategories()
            .then((data) => {
                setCategories(data);
            })
            .catch((e) => {});
    };

    useEffect(() => {
        fetchEvents();
        fetchCategories();
    }, []);

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
                            <option>On Line</option>
                        </select>
                    </div>
                    <ul className="flex flex-row gap-10 overflow-x-auto no-scrollbar">
                        <li
                            className={`${
                                eventType === "all" &&
                                "text-primary border-b-2 border-primary"
                            } font-semibold pb-4 cursor-pointer text-gray-600`}
                            onClick={() => {
                                setResult(null);
                                fetchEvents();
                                setEventType("all");
                            }}
                        >
                            All
                        </li>
                        {categories["data"].map((input) => {
                            return (
                                <li
                                    key={input.categoryId}
                                    className={`${
                                        eventType === input.categoryId &&
                                        "text-primary border-b-2 border-primary"
                                    } font-semibold pb-4 cursor-pointer text-gray-600`}
                                    onClick={() => {
                                        setResult(null);
                                        fetchEventsByCategoryId(
                                            input.categoryId
                                        );
                                        setEventType(input.categoryId);
                                    }}
                                >
                                    {input.name}
                                </li>
                            );
                        })}
                    </ul>
                    {/* Event Presentation Part */}
                    <Event data={result} />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EventPage;
