import axios from "axios";
import {
    ForgetPassword_endpoint,
    ResetPassword_endpoint,
    SignIn_endpoint,
    SignUp_endpoint,
} from "../constants/endpoint";
import { SetToken, SetUserName } from "./token";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const SignInService = async (data) => {
    try {
        const response = await axios.post(SignIn_endpoint, data);
        SetToken(await response.data["token"]);
        SetUserName(await response.data["firstName"]);
        cookies.set("access_token", await response.data["refreshToken"], {
            path: "/",
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        });
        return {
            isError: false,
            message: null,
            data: null,
        };
    } catch (e) {
        return {
            isError: true,
            message: e.response.data["message"],
            data: null,
        };
    }
};

export const SignUpService = async (data) => {
    try {
        const response = await axios.post(SignUp_endpoint, data);
        SetToken(await response.data["token"]);
        SetUserName(await response.data["firstName"]);
        cookies.set("access_token", await response.data["refreshToken"], {
            path: "/",
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        });
        return {
            isError: false,
            message: null,
            data: null,
        };
    } catch (e) {
        return {
            isError: true,
            message: e.response.data["message"],
            data: null,
        };
    }
};

export const ForgetPasswordService = async (data) => {
    try {
        const response = await axios.post(ForgetPassword_endpoint, data);
        return {
            isError: false,
            message: response.data["message"],
            data: null,
        };
    } catch (e) {
        return {
            isError: true,
            message: e.response.data["message"],
            data: null,
        };
    }
};

export const ResetPasswordService = async (data) => {
    try {
        const response = await axios.post(ResetPassword_endpoint, data);
        return {
            isError: false,
            message: response.data["message"],
            data: null,
        };
    } catch (e) {
        return {
            isError: true,
            message: e.response.data["message"],
            data: null,
        };
    }
};
