import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Profile from "../components/myAccount/profile";
import Setting from "../components/myAccount/setting";
import { FetUserInfoByToken, UpdateUserByTokenService } from "../services/userService";
import Loading from "../components/loading";
import AlertMessage from "../widgets/alert";


const MyAccount = () => {
    const [eventAction, setEventAction] = useState("profile");

    const [result, setResult] = useState({});
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState(false);
    const [activeModal, setActiveModal] = useState(false);

    const FetchUserInfo = () => {
        const res = FetUserInfoByToken();
        res.then((data) => {
            if (!data.isError) {
                setResult(data["data"]);
            } else {
                // console.log(data["data"]);
                setResult(data["data"]);
            }
        }).catch((e) => {
            console.log(e);
        });
    };

    const submitUpdate = (event, data) => {
        event.preventDefault();
        const res = UpdateUserByTokenService(data);
        res.then((data) => {
            setMessage(data.message);
            setIsError(data.isError);
            setActiveModal(true);
        }).catch((e) => {
            console.log(e);
        });

    }

    useEffect(() => {
        FetchUserInfo();
    }, []);

    if (!result["firstName"]) {
        return <Loading />;
    }
    return (
        <div className="w-full h-full flex flex-col overflow-y-auto gap-10 pb-40 md:pb-0">
            {/* Header */}
            <div className="relative min-h-[40%] flex text-white">
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
                        <div className="flex flex-col sm:flex-row gap-6 md:gap-0 justify-between items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            <h1 className="text-lg font-semibold">
                                My Account
                            </h1>
                        </div>
                    </div>
                    <div className="absolute bottom-0 w-full flex justify-center">
                        <div className="flex flex-row items-center text-white px-4 w-full md:w-10/12 max-w-screen-xl">
                            {/* Draft */}
                            <button
                                className={`${
                                    eventAction === "profile" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-24 font-semibold`}
                                onClick={() => setEventAction("profile")}
                            >
                                Profile
                            </button>
                            {/* Published */}
                            <button
                                className={`${
                                    eventAction === "setting" &&
                                    "bg-white text-primary rounded-t-md"
                                } flex justify-center items-center h-12 w-24 font-semibold`}
                                onClick={() => setEventAction("setting")}
                            >
                                Published
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events */}
            <Profile active={eventAction} data={result} submit={submitUpdate} />
            {/* Events */}
            <Setting active={eventAction} />

            {/* Footer */}
            <Footer />

            <AlertMessage
                    isActive={activeModal}
                    title={isError ? "Error" : "Success"}
                    message={message}
                    setIsActive={setActiveModal}
                />
        </div>
    );
};

export default MyAccount;
