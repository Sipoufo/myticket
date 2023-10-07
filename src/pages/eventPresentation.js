import React from "react";
// import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Event from "../widgets/event";
import { FiHeart, FiUpload } from "react-icons/fi";

const EventPresentation = () => {
    // let params = useParams();
    // params.eventId
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 md:pb-0">
            {/* Header */}
            <div className="relative min-h-screen md:min-h-[80%] flex text-white">
                {/* Background image */}
                <img
                    src={process.env.PUBLIC_URL + "/assets/images/bg2.jpg"}
                    className="absolute h-full w-full object-cover"
                    alt="bg_image_home"
                />
                <div className="absolute h-full w-full bg-gradient-to-t bg-primary to-transparent bg-opacity-70"></div>
                <div className="w-full h-full z-10 flex flex-col justify-center">
                    <Navbar />
                    <div className="flex justify-center">
                        <div className="flex flex-col-reverse gap-6 md:gap-0 md:flex-row justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            {/* Information */}
                            <div className="flex flex-col gap-10">
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-3xl font-bold">
                                        Johny's Event
                                    </h1>
                                    <h2 className="font-semibold mt-2">
                                        Fri, Oct 27, 2023 to Sat, Oct 28, 2023
                                    </h2>
                                    <h3 className="font-medium text-gray-300">
                                        1:40 pm - 1:40 pm
                                    </h3>
                                </div>
                                {/* User */}
                                <div className="flex flex-row items-center gap-2">
                                    <div className="h-14 w-14 rounded-full bg-[#3B3A62] border-4 border-white flex justify-center items-center text-xl font-semibold">
                                        S
                                    </div>
                                    <div className="flex flex-col gap-1 text-xs">
                                        <label>Organized by:</label>
                                        <h1 className="font-medium">
                                            SIPOUFO Yvan
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            {/* Picture */}
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/bg2.jpg"
                                }
                                className="h-4/6 w-8/12 md:w-6/12 object-cover border-4 border-white rounded-sm shadow-2xl"
                                alt="bg_image_home"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative flex flex-col md:flex-row gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    <div className="flex flex-col gap-4 w-6/12">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold">Description</h1>
                            <p className="text-gray-500">
                                Si vous avez répondu oui à une de ces questions,
                                le prochain Rendez-vous Inspiration Carrière est
                                fait pour vous ! Vous aurez l'opporunité
                                d'échanger et d'explorer des pistes d'actions
                                pour l'épanouissement de votre carrière. M﻿arien
                                Balat, coach professionnelle, ACC N﻿athalie
                                Balthazar, coach professionnelle, PCC
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold">
                                Politique de remboursement
                            </h1>
                            <p className="text-gray-500">
                                Communiquer avec l'organisateur pour demander un
                                remboursement.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-grow flex-col items-end justify-start">
                        <div className="flex flex-col gap-4 px-4 py-6 w-80 rounded-lg border">
                            <div className="flex flex-row justify-between items-center">
                                <button className="w-10 h-10 rounded-full border border-black flex justify-center items-center bg-white hover:bg-gray-100">
                                    <FiUpload className="text-lg" />
                                </button>
                                <p className="font-semibold">À partir de 10.24$</p>
                                <button className="w-10 h-10 rounded-full border border-black flex justify-center items-center bg-white hover:bg-gray-100">
                                    <FiHeart className="text-lg" />
                                </button>
                            </div>
                            <button className="w-full bg-primary px-4 py-2 text-lg text-white font-semibold rounded-sm">
                                buy ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl">
                    {/* header */}
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="text-xl font-bold">Others events</h1>
                    </div>
                    <Event />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default EventPresentation;
