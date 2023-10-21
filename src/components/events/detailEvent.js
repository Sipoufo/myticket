import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const DetailEvent = ({ active }) => {
    const [image, setImage] = useState(null);

    const handleFileInput = (e) => {
        // console.log("handleFileInput working!");
        // console.log(e.target.files[0]);
        const formData = new FormData();
        formData.append(
            "my-image-file",
            e.target.files[0],
            e.target.files[0].name
        );
        setImage(formData);
    };
    return (
        <div className={`${active !== "detail" && "hidden"} flex flex-col w-80 h-full bg-white animate-wiggle`}>
            <div className="flex flex-row justify-between items-center py-4 px-4 text-gray-600 text-base font-medium border-b">
                <label>Event Details</label>
                <IoArrowBackOutline />
            </div>
            <form className="flex flex-col py-4 overflow-y-auto px-4 gap-4 text-xs">
                <span className="text-gray-600 font-medium text-sm">
                    Livestream
                </span>
                {/* Link */}
                <div className="flex flex-col gap-2">
                    <label>Link</label>
                    <input
                        type="text"
                        name="link"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Link"
                    />
                </div>
                {/* Additional Info */}
                <div className="flex flex-col gap-2">
                    <label>Additional info</label>
                    <input
                        type="text"
                        name="additionalInfo"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Additional info"
                    />
                </div>
                {/* Send Link */}
                <div className="flex flex-row gap-2 items-start">
                    <input type="checkbox" name="sendLink" />
                    <label>
                        Send this link to all the users who bought the tickets
                    </label>
                </div>

                <span className="text-gray-600 font-medium text-sm">Info</span>
                {/* Event Title */}
                <div className="flex flex-col gap-2">
                    <label>Event Title</label>
                    <input
                        type="text"
                        name="eventTitle"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Event Title"
                    />
                </div>
                {/* Event Summary */}
                <div className="flex flex-col gap-2">
                    <label>Event Summary</label>
                    <textarea
                        type="text"
                        name="eventSummary"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Event Summary"
                    />
                </div>
                {/* Category */}
                <div className="flex flex-col gap-2">
                    <label>Category</label>
                    <select className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm bg-white">
                        <option>Business</option>
                        <option>Food</option>
                        <option>Art</option>
                        <option>Code</option>
                    </select>
                </div>
                {/* Event Type */}
                <div className="flex flex-col gap-2">
                    <label>Event type</label>
                    <select className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm bg-white">
                        <option>Online</option>
                        <option>Presential</option>
                    </select>
                </div>

                <span className="text-gray-600 font-medium text-sm">
                    Date & Time
                </span>
                {/* Start date & time */}
                <div className="flex flex-col gap-2">
                    <label>Start date & time</label>
                    <input
                        type="datetime-local"
                        name="start"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                    />
                </div>
                {/* End date & time */}
                <div className="flex flex-col gap-2">
                    <label>End date & time</label>
                    <input
                        type="datetime-local"
                        name="end"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                    />
                </div>

                <span className="text-gray-600 font-medium text-sm">
                    Event Poster
                </span>
                <div className="flex flex-col gap-2">
                    {/* <label>End date & time</label> */}
                    <div class="flex items-center justify-center w-full">
                        <label
                            for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span class="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                                onChange={handleFileInput}
                            />
                        </label>
                    </div>
                </div>
                {/* Event Description */}
                <div className="flex flex-col gap-2">
                    <label>Event Description</label>
                    <textarea
                        type="text"
                        name="eventDescription"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Event Description"
                    />
                </div>
                {/* Event website */}
                <div className="flex flex-col gap-2">
                    <label>Event website</label>
                    <input
                        type="text"
                        name="eventWebsite"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Official event website"
                    />
                </div>
                {/* Facebook page */}
                <div className="flex flex-col gap-2">
                    <label>Facebook page</label>
                    <input
                        type="text"
                        name="facebookPage"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="https://facebook.com/yourenvent"
                    />
                </div>
                {/* Twitter Profile */}
                <div className="flex flex-col gap-2">
                    <label>Twitter Profile</label>
                    <input
                        type="text"
                        name="twitterProfile"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="https://facebook.com/yourenvent"
                    />
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

export default DetailEvent;
