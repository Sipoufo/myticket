import React from "react";
import { FaXmark } from "react-icons/fa6";

const AlertMessage = ({ title, message, isActive, setIsActive, isError = false }) => {
    return (
        <div
            className={`${
                !isActive && "hidden"
            } ${isError ? "bg-rose-400" : "bg-emerald-400"} animate-message fixed flex flex-row items-start z-40 top-5 origin-center left-[0] right-[0] m-auto p-4 w-10/12 sm:6/12 md:w-3/12 text-white font-medium rounded-lg`}
        >
            <div className="grow flex flex-col gap-1 items-start">
                <h1 className="text-base font-semibold">{title} :</h1>
                <p>{message}</p>
            </div>
            <button onClick={(e) => setIsActive(false)}>
                <FaXmark className="text-xl" />
            </button>
        </div>
    );
};

export default AlertMessage;
