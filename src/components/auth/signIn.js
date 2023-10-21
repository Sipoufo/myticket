import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Loading from "../loading";
import { SignInService } from "../../services/authentication";
import AlertMessage from "../../widgets/alert";

const SignIn = ({ modalService, setModalService, setShowOAuthModal }) => {
    let data = {
        username: "",
        password: "",
    };

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const SignIn = (event) => {
        event.preventDefault();
        setLoading(true);
        const res = SignInService(data);
        res.then((data) => {
            if (!data.isError) {
                setShowOAuthModal(false);
                window.location.replace("/");
            }
            setResult(data);
            setIsError(data.isError);
            setLoading(false);
        }).catch((e) => {
            setLoading(false);
        });
    };

    if (loading) {
        return <Loading />;
    } else {
        return (
            <div
                className={`${
                    modalService !== "signIn" && "hidden"
                } relative flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12`}
            >
                <button
                    className="absolute right-4 top-4"
                    onClick={() => setShowOAuthModal(false)}
                >
                    <IoMdClose className="text-2xl" />
                </button>
                <h1 className="font-extrabold text-xl text-primary">
                    MyTicket
                </h1>
                <label className="text-base text-secondary font-semibold">
                    Log in
                </label>
                <form className="flex flex-col mt-2 gap-4" onSubmit={SignIn}>
                    <input
                        type="email"
                        name="email"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Email"
                        onChange={(e) => {
                            data.username = e.target.value;
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Password"
                        onChange={(e) => {
                            data.password = e.target.value;
                        }}
                    />
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" />
                            <label>Remember me</label>
                        </div>
                        <p
                            className="text-primary font-medium cursor-pointer"
                            onClick={() => setModalService("forgetPassword")}
                        >
                            forget password ?
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-auto px-4 py-3 bg-[#525266] text-white rounded-lg hover:bg-opacity-90 font-medium"
                    >
                        Sign in
                    </button>
                </form>
                <p className="mt-4">
                    Don't have an account?{" "}
                    <button
                        className="text-primary font-medium"
                        onClick={() => setModalService("signUp")}
                    >
                        Sign up
                    </button>
                </p>
                <AlertMessage
                    isActive={isError}
                    title={"Error"}
                    message={result.message}
                    setIsActive={setIsError}
                />
            </div>
        );
    }
};

export default SignIn;
