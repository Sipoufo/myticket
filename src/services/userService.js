import axios from "axios";
import { UserInfoByToken_endpoint } from "../constants/endpoint";
import { GetToken } from "./token";

const headers = { Authorization: "Bearer " + GetToken() };

export const FetUserInfoByToken = async () => {
    try {
        const response = await axios.get(UserInfoByToken_endpoint, {
            headers,
        });
        return {
            isError: false,
            message: null,
            data: response.data,
        };
    } catch (e) {
        console.log(e);
        return {
            isError: true,
            message: e.response.data["message"],
            data: [],
        };
    }
};

export const UpdateUserByTokenService = async (data) => {
    try {
        const response = await axios.put(UserInfoByToken_endpoint, data, {
            headers,
        });
        return {
            isError: false,
            message: response.data.message,
            data: response.data,
        };
    } catch (e) {
        console.log(e);
        return {
            isError: true,
            message: e.response.data["message"],
            data: [],
        };
    }
};
