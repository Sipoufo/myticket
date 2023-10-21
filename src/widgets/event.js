import React from "react";
import EventCard from "./eventCard";

const Event = ({ data }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((input) => {
                const date = new Date(input.start_event);
                return (
                    <EventCard
                        id={input.EventId}
                        image={"/assets/images/bg1.jpg"}
                        title={input.name}
                        organizer={input.organizer.firstName}
                        time={`${date.getDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                        isFree={true}
                        place={input.location}
                        key={input.eventId}
                    />
                );
            })}
        </div>
    );
};

export default Event;
