import React from "react";
import EventCard from "./eventCard";

const Event = () => {
    return  (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={true} place={"DMK International"} participants={"10k"} />
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={false} price={"10.452$"} place={"DMK International"} participants={"10k"} />
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={false} price={"10.452$"} place={"DMK International"} participants={"10k"} />
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={false} price={"10.452$"} place={"DMK International"} participants={"10k"} />
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={false} price={"10.452$"} place={"DMK International"} participants={"10k"} />
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={false} price={"10.452$"} place={"DMK International"} participants={"10k"} />
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={false} price={"10.452$"} place={"DMK International"} participants={"10k"} />
            <EventCard image={"/assets/images/bg1.jpg"} title={"Webinaire : Comment maîtriser son impôt sur le revenu ?"} time={"lun. 23 oct. 2023 17:30 WAT"} isFree={false} price={"10.452$"} place={"DMK International"} participants={"10k"} />
        </div>
    )
};

export default Event;