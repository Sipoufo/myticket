import React, { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./signUp";
import ForgetPassword from "./forgetPassword";

const Auth = ({showOAuthModal, setShowOAuthModal}) => {
    const [modalService, setModalService] = useState("signIn");

    return (
        <div className={`${!showOAuthModal && "hidden"} fixed z-50 w-screen h-screen top-0 overflow-hidden  text-black`}>
            <div className="relative w-full h-full flex justify-center items-center overflow-y-auto">
                {/* background opacity */}
                <div className="absolute w-full h-full bg-black bg-opacity-60" onClick={() => setShowOAuthModal(false)}></div>

                {/* Form sign in */}
                <SignIn modalService={modalService} setModalService={setModalService} />

                {/* Form sign up */}
                <SignUp modalService={modalService} setModalService={setModalService} />

                {/* Forget Password */}
                <ForgetPassword modalService={modalService} />
            </div>
        </div>
    );
};

export default Auth;
