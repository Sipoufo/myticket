import moment from "moment";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { UpdateEventService } from "../../services/eventService";
import AlertMessage from "../../widgets/alert";
import Loading from "../loading";

const DetailEvent = ({ active, data, categories }) => {
    const [image, setImage] = useState('');
    const [eventTitle, setEventTitle] = useState(data["name"]);
    const [eventDescription, setEventDescription] = useState(
        data["description"]
    );
    const [link, setLink] = useState(data["link"]);
    const [additionalInfo, setAdditionalInfo] = useState(
        data["additional_info"]
    );
    const [sendLink, setSendLink] = useState(data["send_link"]);
    const [eventSummary, setEventSummary] = useState(data["event_summary"]);
    const [eventCategory, setEventCategory] = useState(
        data["category"]["categoryId"]
    );
    const [eventType, setEventType] = useState(data["event_type"]);
    const [startEvent, setStartEvent] = useState(
        moment(data["startEvent"], "YYYY-MM-DD HH:mm+ZZ").format(
            "DD/MM/YYYY hh:mm"
        )
    );
    const [endEvent, setEndEvent] = useState(
        moment(data["endEvent"], "YYYY-MM-DD HH:mm+ZZ").format(
            "DD/MM/YYYY hh:mm"
        )
    );
    const [eventWebsite, setEventWebsite] = useState(data["event_website"]);
    const [facebookLink, setFacebookLink] = useState(data["facebook_link"]);
    const [twitterLink, setTwitterLink] = useState(data["twitter_link"]);

    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFileInput = (e) => {
        // console.log("handleFileInput working!");
        // console.log(e.target.files[0]);
        console.log(image);
        const formData = new FormData();
        formData.append(
            "my-image-file",
            e.target.files[0],
            e.target.files[0].name
        );
        setImage(formData);
    };

    const updateEvent = async (event) => {
        event.preventDefault();
        setLoading(true);
        const input = {
            eventId: data["eventId"],
            name: eventTitle,
            description: eventDescription,
            link,
            additional_info: additionalInfo,
            send_link: sendLink,
            event_summary: eventSummary,
            categoryId: eventCategory,
            eventType,
            startEvent,
            endEvent,
            event_website: eventWebsite,
            facebook_link: facebookLink,
            twitter_link: twitterLink,
        };

        await UpdateEventService(input)
            .then((data) => {
                setMessage(data.message);
                setIsError(data.isError);
                setIsActive(true);
                setLoading(false);
            })
            .catch((e) => {
                setLoading(false);
            });
    };

    if (loading) {
        <Loading />;
    }
    return (
        <div
            className={`${
                active !== "detail" && "hidden"
            } flex flex-col w-full md:w-80 h-full bg-white animate-wiggle`}
        >
            <div className="flex flex-row justify-between items-center py-4 px-4 text-gray-600 text-base font-medium border-b">
                <label>Event Details</label>
                <IoArrowBackOutline />
            </div>
            <form
                className="flex flex-col py-4 overflow-y-auto px-4 gap-4 text-xs"
                onSubmit={updateEvent}
            >
                <span className="text-gray-600 font-medium text-sm">
                    Livestream
                </span>
                {/* Link */}
                <div className="flex flex-col gap-2">
                    <label>Link</label>
                    <input
                        type="text"
                        name="link"
                        value={link}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Link"
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                {/* Additional Info */}
                <div className="flex flex-col gap-2">
                    <label>Additional info</label>
                    <input
                        type="text"
                        name="additionalInfo"
                        value={additionalInfo}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Additional info"
                        onChange={(e) => setAdditionalInfo(e.target.value)}
                    />
                </div>
                {/* Send Link */}
                <div className="flex flex-row gap-2 items-start">
                    <input
                        type="checkbox"
                        name="sendLink"
                        onChange={(e) => {
                            setSendLink(e.target.checked);
                        }}
                        checked={sendLink}
                    />
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
                        value={eventTitle}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Event Title"
                        onChange={(e) => setEventTitle(e.target.value)}
                        required
                    />
                </div>
                {/* Event Summary */}
                <div className="flex flex-col gap-2">
                    <label>Event Summary</label>
                    <textarea
                        type="text"
                        name="eventSummary"
                        value={eventSummary}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Event Summary"
                        onChange={(e) => setEventSummary(e.target.value)}
                        required
                    />
                </div>
                {/* Category */}
                <div className="flex flex-col gap-2">
                    <label>Category</label>
                    <select
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm bg-white"
                        onChange={(e) => setEventCategory(e.target.value)}
                        required
                    >
                        {categories["data"].map((category) => {
                            return (
                                <option
                                    key={category.categoryId}
                                    value={category.categoryId}
                                    selected={
                                        eventCategory === category.categoryId
                                    }
                                >
                                    {category.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                {/* Event Type */}
                <div className="flex flex-col gap-2">
                    <label>Event type</label>
                    <select
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm bg-white"
                        onChange={(e) => setEventType(e.target.value)}
                        required
                    >
                        <option
                            value={"Online"}
                            selected={eventType === "Presential"}
                        >
                            Online
                        </option>
                        <option
                            value={"Presential"}
                            selected={eventType === "Presential"}
                        >
                            Presential
                        </option>
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
                        value={moment(startEvent, "DD/MM/YYYY hh:mm").format(
                            "YYYY-MM-DD hh:mm"
                        )}
                        min={new Date().toISOString().slice(0, -8)}
                        onChange={(e) => {
                            setStartEvent(
                                moment(
                                    e.target.value,
                                    "YYYY-MM-DD HH:mm+ZZ"
                                ).format("DD/MM/YYYY hh:mm")
                            );
                        }}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        required
                    />
                </div>
                {/* End date & time */}
                <div className="flex flex-col gap-2">
                    <label>End date & time</label>
                    <input
                        type="datetime-local"
                        name="end"
                        value={moment(endEvent, "DD/MM/YYYY hh:mm").format(
                            "YYYY-MM-DD hh:mm"
                        )}
                        min={new Date(moment(data["startEvent"])).toISOString().slice(0, -8)}
                        onChange={(e) => {
                            setEndEvent(
                                moment(
                                    e.target.value,
                                    "YYYY-MM-DD HH:mm+ZZ"
                                ).format("DD/MM/YYYY hh:mm")
                            );
                        }}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        required
                    />
                </div>

                <span className="text-gray-600 font-medium text-sm">
                    Event Poster
                </span>
                <div className="flex flex-col gap-2">
                    {/* <label>End date & time</label> */}
                    <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
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
                        value={eventDescription}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Event Description"
                        onChange={(e) => setEventDescription(e.target.value)}
                        required
                    />
                </div>
                {/* Event website */}
                <div className="flex flex-col gap-2">
                    <label>Event website</label>
                    <input
                        type="text"
                        name="eventWebsite"
                        value={eventWebsite}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Official event website"
                        onChange={(e) => setEventWebsite(e.target.value)}
                    />
                </div>
                {/* Facebook page */}
                <div className="flex flex-col gap-2">
                    <label>Facebook page</label>
                    <input
                        type="text"
                        name="facebookPage"
                        value={facebookLink}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="https://facebook.com/yourenvent"
                        onChange={(e) => setFacebookLink(e.target.value)}
                    />
                </div>
                {/* Twitter Profile */}
                <div className="flex flex-col gap-2">
                    <label>Twitter Profile</label>
                    <input
                        type="text"
                        name="twitterProfile"
                        value={twitterLink}
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="https://twitter.com/yourenvent"
                        onChange={(e) => setTwitterLink(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-auto px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium"
                >
                    Save
                </button>
            </form>

            {/* Alert */}
            <AlertMessage
                isActive={isActive}
                title={isError ? "Error" : "Success"}
                message={message}
                setIsActive={setIsActive}
                isError={isError}
            />
        </div>
    );
};

export default DetailEvent;
