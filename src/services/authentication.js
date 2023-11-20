import axios from "axios";
import {
    ForgetPassword_endpoint,
    ResetPassword_endpoint,
    SignIn_endpoint,
    SignUp_endpoint,
} from "../constants/endpoint";
import { RemoveItems, SetToken, SetUserId, SetUserName, SetUserRole } from "./token";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export const SignInService = async (data) => {
    return axios
        .post(SignIn_endpoint, data)
        .then((response) => {
            SetToken(response.data["token"]);
            SetUserName(response.data["firstName"]);
            SetUserId(response.data["user"]["userId"].toString());
            SetUserRole(response.data["user"]["role"]["name"]);
            cookies.set("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
            };
        })
        .catch((e) => {
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                RemoveItems();
                window.location.replace("/error");
                RemoveItems();
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};

export const SignUpService = async (data) => {
    console.log("response");
    return axios
        .post(SignUp_endpoint, data)
        .then((response) => {
            console.log(response);
            console.log(response.data["user"]);
            SetToken(response.data["token"]);
            SetUserName(response.data["firstName"]);
            SetUserId(response.data["user"]["userId"].toString());
            SetUserRole(response.data["user"]["role"]["name"]);
            cookies.set("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
            };
        })
        .catch((e) => {
            console.log(e)
            if (!e.response) {
                // RemoveItems();
                // window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                // RemoveItems();
                // window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};

export const ForgetPasswordService = async (data) => {
    return axios
        .post(ForgetPassword_endpoint, data)
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
                data: null,
            };
        })
        .catch((e) => {
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};

export const ResetPasswordService = async (data) => {
    return axios
        .post(ResetPassword_endpoint, data)
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
                data: null,
            };
        })
        .catch((e) => {
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};
