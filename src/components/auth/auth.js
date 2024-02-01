import React from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import ForgetPassword from "./forgetPassword";
import CreateEvent from "../createEvent";
import ResetPassword from "./resetPassword";

const Auth = ({
    showOAuthModal,
    setShowOAuthModal,
    modalService,
    setModalService,
    token = null,
    categories,
    setMessage,
    setIsError,
    setIsActive,
}) => {
    return (
        <div
            className={`${
                !showOAuthModal && "hidden"
            } fixed z-50 w-screen h-screen top-0 overflow-hidden  text-black`}
        >
            <div className="relative w-full h-full flex justify-center items-center overflow-y-auto">
                {/* background opacity */}
                <div
                    className="absolute w-full h-full bg-black bg-opacity-60 "
                    onClick={() => setShowOAuthModal(false)}
                ></div>

                {/* Form sign in */}
                <SignIn
                    modalService={modalService}
                    setModalService={setModalService}
                    setShowOAuthModal={setShowOAuthModal}
                />

                {/* Form sign up */}
                <SignUp
                    modalService={modalService}
                    setModalService={setModalService}
                    setShowOAuthModal={setShowOAuthModal}
                />

                {/* Forget Password */}
                <ForgetPassword
                    modalService={modalService}
                    setShowOAuthModal={setShowOAuthModal}
                />

                {/* Reset Password */}
                <ResetPassword
                    modalService={modalService}
                    setModalService={setModalService}
                    setShowOAuthModal={setShowOAuthModal}
                    token={token}
                />

                {/* Create Event */}
                <CreateEvent
                    modalService={modalService}
                    setShowOAuthModal={setShowOAuthModal}
                    categories={categories}
                    setMessage={setMessage}
                    setIsError={setIsError}
                    setIsActive={setIsActive}
                />
            </div>
        </div>
    );
};

export default Auth;
