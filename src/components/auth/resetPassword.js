import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { ResetPasswordService } from "../../services/authentication";
import AlertMessage from "../../widgets/alert";
import Loading from "../loading";

const ResetPassword = ({
    modalService,
    setModalService,
    setShowOAuthModal,
    token,
}) => {
    let data = {
        token,
        newPassword: "",
        confirmPassword: "",
    };

    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const resetPassword = async (event) => {
        event.preventDefault();
        setLoading(true);
        const res = await ResetPasswordService(data);
        res.then((data) => {
            setResult(data);
            setIsActive(true);
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
                    modalService !== "resetPassword" && "hidden"
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
                    Reset Password
                </label>
                <form
                    className="flex flex-col mt-2 gap-4"
                    onSubmit={resetPassword}
                >
                    <input
                        type="password"
                        name="newPassword"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="New password"
                        onChange={(e) => {
                            data.newPassword = e.target.value;
                        }}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        className="border border-[#E6E6E6] text-black placeholder:text-secondary px-4 py-3 rounded-sm"
                        placeholder="Confirm password"
                        onChange={(e) => {
                            data.confirmPassword = e.target.value;
                        }}
                    />
                    <button className="w-auto px-4 py-3 bg-[#525266] text-white rounded-lg hover:bg-opacity-90 font-medium">
                        Send Reset Link
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
                    isActive={isActive}
                    title={"Error"}
                    message={result.message}
                    setIsActive={setIsActive}
                    isError={result.isError}
                />
            </div>
        );
    }
};

export default ResetPassword;
