import { Ticket_type_endPoint } from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";
import { GetToken } from "./token";

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
            return {
                isError: true,
                message: e.response.data["message"],
                data: [],
            };
        });
};