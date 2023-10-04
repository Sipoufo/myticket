import React from "react";

const ForgetPassword = ({ modalService }) => {
    return (
        <div
            className={`${
                modalService !== "forgetPassword" && "hidden"
            } flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12`}
        >
            <label className="text-base text-secondary font-semibold">
                Reset Password
            </label>
            <form className="flex flex-col mt-2 gap-4">
                <p className="text-start text-xs font-normal">
                    BEnter the email address associated with your account, and
                    we'll email you a link to reset your password.
                </p>
                <input
                    type="email"
                    name="email"
                    className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                    placeholder="Email"
                />
                <button className="w-auto px-4 py-3 bg-[#525266] text-white rounded-lg hover:bg-opacity-90 font-medium">
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgetPassword;
