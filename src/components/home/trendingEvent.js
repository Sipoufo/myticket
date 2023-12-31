import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Event from "../../widgets/event";
// import { FetchAllEvents } from "../../services/eventService";

const TrendingEvent = ({ data }) => {
    return (
        <div className="flex justify-center">
            <div className="relative flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                {/* header */}
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl font-medium">
                        Trending events near you
                    </h1>
                    <a href="/events" className="flex flex-row gap-1 items-center hover:text-primary">
                        <p>Browse all</p>
                        <AiOutlineArrowRight className="text-sm" />
                    </a>
                </div>

                {/* No Event */}
                <div className={`${data.length !== 0 && "hidden"} h-60 flex justify-center items-center`}>
                    <p className="text-secondary text-4xl font-semibold">Oops, no events here!</p>
                </div>
                {/* Event Presentation Part */}
                <Event data={data} />
            </div>
        </div>
    );
};

export default TrendingEvent;
