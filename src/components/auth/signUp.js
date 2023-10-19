import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SignUpService } from "../../services/authentication";
import Loading from "../loading";
import AlertMessage from "../../widgets/alert";

const SignUp = ({ modalService, setModalService, setShowOAuthModal }) => {
    let data = {
        firstName: "",
        lastName: "",
        password: "",
        phone: "",
        email: "",
    };

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const SignUp = (event) => {
        event.preventDefault();
        setLoading(true);
        console.log(data);
        const res = SignUpService(data);
        res.then((data) => {
            if (!data.isError) {
                setShowOAuthModal(false);
                window.location.replace("/");
            }
            setResult(data);
            setIsError(data.isError);
            setLoading(false);
        }).catch((e) => {
            console.log(e);
            setLoading(false);
        });
    };

    if (loading) {
        return <Loading />;
    } else {
        return (
            <div
                className={`${
                    modalService !== "signUp" && "hidden"
                } relative flex flex-col text-center bg-white rounded-md shadow-md z-50 p-6 gap-2 w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12`}
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
                    Create Account
                </label>
                <form className="flex flex-col mt-2 gap-4" onSubmit={SignUp}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                        <input
                            type="text"
                            name="firstName"
                            className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="First Name"
                            onChange={(e) => {
                                data.firstName = e.target.value;
                            }}
                        />
                        <input
                            type="text"
                            name="lastName"
                            className="w-full sm:w-1/2 border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                            placeholder="Last Name"
                            onChange={(e) => {
                                data.lastName = e.target.value;
                            }}
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Email"
                        onChange={(e) => {
                            data.email = e.target.value;
                        }}
                    />
                    <input
                        type="text"
                        name="phone"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Phone"
                        onChange={(e) => {
                            data.phone = e.target.value;
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
                    <p className="text-start text-xs font-normal">
                        By signing up, I agree to the Privacy Policy and the
                        Terms of Services.
                    </p>
                    <button className="w-auto px-4 py-3 bg-[#525266] text-white rounded-lg hover:bg-opacity-90 font-medium">
                        Sign up
                    </button>
                </form>
                <p className="mt-4">
                    Don't have an account?{" "}
                    <button
                        className="text-primary font-medium"
                        onClick={() => setModalService("signIn")}
                    >
                        Sign in
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

export default SignUp;
