import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaCcVisa } from "react-icons/fa";

const PaymentEvent = ({ active }) => {
    return (
        <div
            className={`${
                active !== "payment" && "hidden"
            } flex flex-col w-80 h-full bg-white animate-wiggle`}
        >
            <div className="flex flex-row justify-between items-center py-4 px-4 text-gray-600 text-base font-medium border-b">
                <label>Payments</label>
                <IoArrowBackOutline />
            </div>
            <form className="flex flex-col py-4 overflow-y-auto px-4 gap-4 text-xs">
                <span className="text-gray-600 font-medium text-sm">
                    Collect Payments
                </span>
                <p>
                    Connect your Stripe account to sell tickets for your paid
                    event.
                </p>
                <p>Accept major cards</p>
                <div className="flex gap-2">
                    <FaCcVisa className="text-3xl" />
                    <FaCcVisa className="text-3xl" />
                </div>
                {/* Category */}
                <div className="flex flex-col gap-2">
                    <span className="text-gray-600 font-medium text-sm">
                        Currency
                    </span>
                    <p>Choose the sale currency for your event tickets.</p>
                    <select className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm bg-white">
                        <option>African</option>
                        <option>American</option>
                        <option>Europe</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-auto px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default PaymentEvent;
