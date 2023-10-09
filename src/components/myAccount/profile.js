import React from "react";

const Profile = ({ active }) => {
    return (
        <div
            className={`${
                active !== "profile" && "hidden"
            } flex justify-center`}
        >
            <form className="flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl justify-center text-start">
                <span className="text-gray-600 font-medium text-sm">
                    Profile Photo
                </span>
                <div className="flex flex-row items-center gap-6">
                    <div class="flex items-center justify-center h-24 w-24 ">
                        <label
                            for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-primary hover:bg-gray-100 text-2xl text-white hover:text-primary font-bold"
                        >
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                S
                            </div>
                            <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                            />
                        </label>
                    </div>
                    <div className="flex w-52 text-xs text-gray-600">
                        Recommended dimension of 200px by 200px with maximum
                        size of 1MB
                    </div>
                </div>
                <span className="text-gray-600 font-medium text-sm">
                    Contact Info
                </span>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* First Name */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="First Name"
                        />
                    </div>
                    {/* Last Name */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">First Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Phone"
                        />
                    </div>
                    {/* Website */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Website</label>
                        <input
                            type="text"
                            name="website"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Website"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Company */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Company</label>
                        <input
                            type="text"
                            name="company"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Company"
                        />
                    </div>
                    {/* Position */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Position</label>
                        <input
                            type="text"
                            name="position"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Position"
                        />
                    </div>
                </div>
                <span className="text-gray-600 font-medium text-sm">
                    Address
                </span>
                <div className="flex flex-col justify-between gap-4">
                    {/* Address */}
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Address"
                        />
                    </div>
                    {/* Address 2 */}
                    <div className="flex flex-col gap-1 w-full">
                        <label className="font-medium">Address 2</label>
                        <input
                            type="text"
                            name="address2"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Address 2"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* City */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">City</label>
                        <input
                            type="text"
                            name="city"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="City"
                        />
                    </div>
                    {/* Country */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Country</label>
                        <input
                            type="text"
                            name="country"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Country"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Postal Code */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Postal Code"
                        />
                    </div>
                    {/* Region */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Region</label>
                        <input
                            type="text"
                            name="region"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Region"
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

export default Profile;
