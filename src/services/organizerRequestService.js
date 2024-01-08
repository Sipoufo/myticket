import { OrganizerRequest_endPoint } from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";
import { GetToken, RemoveItems } from "./token";

const headers = { Authorization: "Bearer " + GetToken() };

export const CreateOrganizerRequest = async () => {

    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .post(
            OrganizerRequest_endPoint(), data,
            {
                headers,
            }
        )
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
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