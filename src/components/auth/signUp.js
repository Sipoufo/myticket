import React from "react";

const SignUp = ({ modalService, setModalService }) => {
    return (
        <div
            className={`${
                modalService !== "signUp" && "hidden"
            } flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12`}
        >
            <h1 className="font-extrabold text-xl text-primary">MyTicket</h1>
            <label className="text-base text-secondary font-semibold">
                Create Account
            </label>
            <form className="flex flex-col mt-2 gap-4">
                <input
                    type="text"
                    name="FirstName"
                    className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="LastName"
                    className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                    placeholder="Last Name"
                />
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
                <p className="text-start text-xs font-normal">
                    By signing up, I agree to the Privacy Policy and the Terms
                    of Services.
                </p>
                <button className="w-auto px-4 py-3 bg-[#525266] text-white rounded-lg hover:bg-opacity-90 font-medium">
                    Sign up
                </button>
            </form>
            <p className="mt-4">
                Don't have an account?{" "}
                <button className="text-primary font-medium" onClick={() => setModalService("signIn")}>Sign in</button>
            </p>
        </div>
    );
};

export default SignUp;
