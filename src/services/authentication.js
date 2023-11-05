import axios from "axios";
import {
    ForgetPassword_endpoint,
    ResetPassword_endpoint,
    SignIn_endpoint,
    SignUp_endpoint,
} from "../constants/endpoint";
import { SetToken, SetUserName } from "./token";
import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export const SignInService = async (data) => {
    return axios
        .post(SignIn_endpoint, data)
        .then((response) => {
            SetToken(response.data["token"]);
            SetUserName(response.data["firstName"]);
            cookies.set("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
            };
        })
        .catch((e) => {
            return {
                isError: true,
                message: e.response.data["message"],
                data: null,
            };
        });
};

export const SignUpService = async (data) => {
    return axios
        .post(SignUp_endpoint, data)
        .then((response) => {
            SetToken(response.data["token"]);
            SetUserName(response.data["firstName"]);
            cookies.set("refreshToken", response.data["refreshToken"]);
            return {
                isError: false,
                message: null,
                data: null,
            };
        })
        .catch((e) => {
            return {
                isError: true,
                message: e.response.data["message"],
                data: null,
            };
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
            return {
                isError: true,
                message: e.response.data["message"],
                data: null,
            };
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
            return {
                isError: true,
                message: e.response.data["message"],
                data: null,
            };
        });
};
