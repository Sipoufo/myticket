import axios from "axios";
import { UserInfoByToken_endpoint } from "../constants/endpoint";
import { GetToken } from "./token";

const headers = { Authorization: "Bearer " + GetToken() };

export const FetUserInfoByToken = async () => {
    return axios
        .get(UserInfoByToken_endpoint, {
            headers,
        })
        .then((response) => {
            return {
                isError: false,
                message: null,
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
            return {
                isError: true,
                message: e.response.data["message"],
                data: [],
            };
        });
};

export const UpdateUserByTokenService = async (data) => {
    return axios
        .put(UserInfoByToken_endpoint, data, {
            headers,
        })
        .then((response) => {
            return {
                isError: false,
                message: response.data.message,
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
            return {
                isError: true,
                message: e.response.data["message"],
                data: [],
            };
        });
};
