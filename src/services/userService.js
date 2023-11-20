import axios from "axios";
import { UserInfoByToken_endpoint } from "../constants/endpoint";
import { GetToken, RemoveItems } from "./token";

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
