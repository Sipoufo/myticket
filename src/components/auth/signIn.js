import React from "react";
import { IoMdClose } from "react-icons/io";

const SignIn = ({ modalService, setModalService, setShowOAuthModal }) => {
    return (
        <div
            className={`${
                modalService !== "signIn" && "hidden"
            } relative flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12`}
        >
            <button className="absolute right-4 top-4" onClick={() => setShowOAuthModal(false)}>
                <IoMdClose className="text-2xl" />
            </button>
            <h1 className="font-extrabold text-xl text-primary">MyTicket</h1>
            <label className="text-base text-secondary font-semibold">
                Log in
            </label>
            <form className="flex flex-col mt-2 gap-4">
                <input
                    type="email"
                    name="email"
                    className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                    placeholder="Password"
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
                <button className="w-auto px-4 py-3 bg-[#525266] text-white rounded-lg hover:bg-opacity-90 font-medium">
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
        </div>
    );
};

export default SignIn;
