import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Event from "../../widgets/event";

const TrendingEvent = () => {
    return (
        <div className="flex justify-center">
            <div className="relative flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                {/* header */}
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-xl font-medium">
                        Trending events near you
                    </h1>
                    <button className="flex flex-row gap-1 items-center hover:text-primary">
                        <p>Browse all</p>
                        <AiOutlineArrowRight className="text-sm" />
                    </button>
                </div>

                {/* No Event */}
                {/* <div className="h-60 flex justify-center items-center">
                    <p className="text-secondary text-4xl font-semibold">Oops, no events here!</p>
                </div> */}
                {/* Event Presentation Part */}
                <Event />
            </div>
        </div>
    );
};

export default TrendingEvent;
