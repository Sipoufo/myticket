import { Ticket_type_endPoint } from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";
import { GetToken, RemoveItems } from "./token";

const headers = { Authorization: "Bearer " + GetToken() };

// Fetch all tickets by eventId
export const FetchAllTicketTypes = async () => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(
            Ticket_type_endPoint,
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response);
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