import React from "react";
import EventCard from "./eventCard";

const Event = ({ data }) => {
    // console.log(data)
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((event) => {
                const date = new Date(event.startEvent);
                return (
                    <EventCard
                        id={event.eventId}
                        image={"/assets/images/bg1.jpg"}
                        title={event.name}
                        organizer={event.organizer.firstName}
                        time={`${date.getUTCDay()}/${date.getMonth()}/${date.getUTCFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                        isFree={true ? event.price === 0 : false}
                        location={event.location}
                        place={12}
                        // {event.location}
                        key={event.eventId}
                    />
                );
            })}
        </div>
    );
};

export default Event;
