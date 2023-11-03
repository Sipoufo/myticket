import React, { useState } from "react";
import { Country, State, City } from "country-state-city";

const Profile = ({ active, data, submit }) => {
    // const [picture, setPicture] = useState(data["picture"]);
    const [firstName, setFirstName] = useState(
        data["firstName"] ? data["firstName"] : ""
    );
    const [lastName, setLastName] = useState(
        data["lastName"] ? data["lastName"] : ""
    );
    const [phoneNumber, setPhoneNumber] = useState(
        data["phone"] ? data["phone"] : ""
    );
    const [website, setWebsite] = useState(
        data["website"] ? data["website"] : ""
    );
    const [company, setCompany] = useState(
        data["website"] ? data["website"] : ""
    );
    const [position, setPosition] = useState(
        data["position"] ? data["position"] : ""
    );
    const [address, setAddress] = useState(
        data["address"] ? data["address"] : ""
    );
    const [address2, setAddress2] = useState(
        data["address2"] ? data["address2"] : ""
    );
    const [country, setCountry] = useState(
        data["country_code"]
            ? data["country_code"]
            : Country.getCountryByCode("CM").isoCode
    );
    const [state, setState] = useState(
        data["state_code"]
            ? data["state_code"]
            : State.getStatesOfCountry(country).length > 0
            ? State.getStatesOfCountry(country)[0].isoCode
            : " "
    );
    const [city, setCity] = useState(
        data["city"]
            ? data["city"]
            : City.getCitiesOfState(country, state).length > 0
            ? City.getCitiesOfState(country, state)[0].name
            : " "
    );
    const [code_postal, setCode_postal] = useState(
        data["code_postal"] ? data["code_postal"] : ""
    );

    // const [imageLoad, setImageLoad] = useState(false);
    // const loadFile = (event) => {
    //     event.preventDefault();
    //     var output = document.getElementById("image_account");
    //     output.src = URL.createObjectURL(event.target.files[0]);
    //     output.onload = function () {
    //         URL.revokeObjectURL(output.src); // free memory
    //     };
    //     setImageLoad(true);
    // };

    return (
        <div
            className={`${
                active !== "profile" && "hidden"
            } flex justify-center`}
        >
            <form
                className="flex flex-col gap-6 px-4 w-full md:w-10/12 max-w-screen-xl justify-center text-start"
                onSubmit={(e) => {
                    submit(e, {
                        firstName,
                        lastName,
                        phone: phoneNumber,
                        website,
                        position,
                        address,
                        address2,
                        city,
                        country: Country.getCountryByCode(country).name,
                        country_code: country,
                        code_postal,
                        state: State.getStateByCodeAndCountry(state, country)
                            .name,
                        state_code: state,
                        company,
                    });
                }}
            >
                <span className="text-gray-600 font-medium text-sm">
                    Profile Photo
                </span>
                <div className="flex flex-row items-center gap-6">
                    <div className="flex items-center justify-center h-24 w-24 ">
                        <label className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-primary hover:bg-gray-100 text-2xl text-white hover:text-primary font-bold">
                            <div
                                className={`flex flex-col items-center justify-center pt-5 pb-6`}
                            >
                                {firstName[0]}
                            </div>
                            {/* <img
                                id="image_account"
                                src=""
                                className={`${
                                    !imageLoad && "hidden"
                                } object-cover h-full w-full`}
                                alt="bg_image_home"
                            /> */}
                            {/* <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={loadFile}
                            /> */}
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
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    {/* Last Name */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
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
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
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
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
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
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* Country */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Country</label>
                        <select
                            name="country"
                            value={country}
                            onChange={(e) => {
                                setCountry(e.target.value);
                                const state =
                                    State.getStatesOfCountry(e.target.value)
                                        .length > 0
                                        ? State.getStatesOfCountry(
                                              e.target.value
                                          )[0].isoCode
                                        : " ";
                                setState(state);
                                setCity(
                                    City.getCitiesOfState(e.target.value, state)
                                        .length > 0
                                        ? City.getCitiesOfState(
                                              e.target.value,
                                              state
                                          )[0].name
                                        : " "
                                );
                            }}
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        >
                            {Country.getAllCountries().map((country) => {
                                return (
                                    <option
                                        value={country.isoCode}
                                        key={country.isoCode}
                                    >
                                        {country.flag} {country.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    {/* State */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">State</label>
                        <select
                            name="state"
                            value={state}
                            onChange={(e) => {
                                setState(e.target.value);
                                setCity(
                                    City.getCitiesOfState(
                                        country,
                                        e.target.value
                                    ).length > 0
                                        ? City.getCitiesOfState(
                                              country,
                                              e.target.value
                                          )[0].name
                                        : " "
                                );
                            }}
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        >
                            {State.getStatesOfCountry(country).map((state) => {
                                return (
                                    <option
                                        value={state.isoCode}
                                        key={state.isoCode}
                                    >
                                        {state.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    {/* City */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">City</label>
                        <select
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        >
                            {City.getCitiesOfCountry(country).map(
                                (city, index) => {
                                    return (
                                        <option value={city.name} key={index}>
                                            {city.name}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                    </div>
                    {/* Postal Code */}
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="font-medium">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Postal Code"
                            value={code_postal}
                            onChange={(e) => setCode_postal(e.target.value)}
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
