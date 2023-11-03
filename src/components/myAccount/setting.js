import React from "react";

const Setting = ({ active }) => {
    return (
        <div
            className={`${
                active !== "setting" && "hidden"
            } flex justify-center`}
        >
            <form className="flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl justify-center text-start">
                <span className="text-gray-600 font-medium text-sm">
                    Email & Password
                </span>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Email Address */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Email Address</label>
                        <input
                            type="text"
                            name="emailAddress"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Email Address"
                        />
                    </div>
                    {/* Current Password */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Current Password</label>
                        <input
                            type="text"
                            name="currentPassword"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Current Password"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* New Password */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">New Password</label>
                        <input
                            type="text"
                            name="newPassword"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="New Password"
                        />
                    </div>
                    {/* Repeat Password */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Repeat Password</label>
                        <input
                            type="text"
                            name="repeatPassword"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Repeat Password"
                        />
                    </div>
                </div>
                <button className="w-auto px-4 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-medium mt-4">
                    Save
                </button>
            </form>
        </div>
    );
};

export default Setting;
