import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const SettingEvent = ({ active }) => {
    return (
        <div
            className={`${
                active !== "setting" && "hidden"
            } flex flex-col w-80 h-full bg-white animate-wiggle`}
        >
            <div className="flex flex-row justify-between items-center py-4 px-4 text-gray-600 text-base font-medium border-b">
                <label>Setting</label>
                <IoArrowBackOutline />
            </div>
            <form className="flex flex-col py-4 overflow-y-auto px-4 gap-4 text-xs">
                <div className="flex flex-row justify-between items-center">
                    <label className="text-gray-600 font-medium text-sm">
                        Private Listing
                    </label>
                    {/* Toggle */}
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            name="privateListing"
                            class="sr-only peer"
                        />
                        <div class="w-14 h-7 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer border-2 peer-checked:after:translate-x-full peer-checked:after:border-green-600 after:content-[''] after:absolute after:top-[0px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                </div>
                <p>
                    Private listings will not be visible on our directory but
                    only accessible to people with a link.
                </p>
                {/* Additional Info */}
                <div className="flex flex-col gap-2">
                    <label className="text-gray-600 font-medium text-sm">Show attendee count</label>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            value=""
                            name="attendeeAccount"
                            class="sr-only peer"
                        />
                        <div class="w-14 h-7 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer border-2 peer-checked:after:translate-x-full peer-checked:after:border-green-600 after:content-[''] after:absolute after:top-[0px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                </div>
                <p>Every will see the number of attendees for your event</p>
            </form>
        </div>
    );
};

export default SettingEvent;
