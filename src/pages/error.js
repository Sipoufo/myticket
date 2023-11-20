import React from "react";
import { IoReload } from "react-icons/io5";

const Error = () => {
    return (
        <div className="w-screen h-screen bg-background flex justify-center items-center">
            <div className="flex flex-col gap-2 w-full max-w-screen-2xl text-center text-xl">
                <h1 className="text-9xl text-primary font-extrabold">500</h1>
                <p className="mt-6 font-light">
                    This page is currently unavailable,
                </p>
                <p className="text-primary font-medium">
                    Please try again later or contact administrator.
                </p>
                <div className="flex justify-center mt-6">
                    <button
                        className="flex flex-row gap-4 items-center px-6 py-3 rounded-xl bg-primary text-white font-medium"
                        onClick={() => window.location.replace("/")}
                    >
                        <span>Reload Page</span>
                        <IoReload className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;
