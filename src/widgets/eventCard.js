import React from "react";
import { FiUpload, FiHeart } from "react-icons/fi";
import { HiMiniUser } from "react-icons/hi2";

const EventCard = ({
    image,
    title,
    time,
    isFree,
    price,
    place,
    participants,
}) => {
    return (
        <button className="flex flex-col hover:shadow-xl shadow-md h-[430px] text-black my-2 border border-gray-200 text-start">
            <img
                src={process.env.PUBLIC_URL + image}
                className="h-40 w-full object-cover"
                alt="eventCard"
            />
            <div className="relative px-4 py-6 flex flex-col bg-white gap-3">
                {/* Icons */}
                <div className="absolute w-full flex flex-row gap-4 left-0 -top-6 justify-end px-6">
                    <button className="w-10 h-10 rounded-full border border-black flex justify-center items-center bg-white hover:bg-gray-100">
                        <FiUpload className="text-lg" />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-black flex justify-center items-center bg-white hover:bg-gray-100">
                        <FiHeart className="text-lg" />
                    </button>
                </div>
                <h1 className="text-base font-bold"> {title} </h1>
                <h2 className="text-forth font-semibold">{time}</h2>
                <h3 className={`${isFree && "hidden"} text-gray-600`}>
                    {" "}
                    À partir de {price}
                </h3>
                <div>
                    <span
                        className={`${
                            !isFree && "hidden"
                        } bg-green-400 px-2 py-1 rounded-md text-white`}
                    >
                        free
                    </span>
                </div>
                <h4 className="text-xs font-medium">{place}</h4>
                <div className="flex flex-row items-center gap-2 font-medium text-xs">
                    <HiMiniUser />
                    <label>{participants} participants</label>
                </div>
            </div>
        </button>
    );
};

export default EventCard;
