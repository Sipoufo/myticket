import { My_Ticket_endPoint, Ticket_by_eventId_endPoint, buy_ticket_endPoint } from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";
import { GetToken } from "./token";

const headers = { Authorization: "Bearer " + GetToken() };

// Fetch all tickets by eventId
export const FetchAllTicketByEventId = async (eventId) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(
            Ticket_by_eventId_endPoint(eventId),
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

// Create one ticket by eventId
export const CreateTicketByEventId = async (data, eventId) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .post(
            Ticket_by_eventId_endPoint(eventId), data,
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
            return {
                isError: true,
                message: e.response.data["message"],
                data: [],
            };
        });
};

// Buy ticket
export const BuyTicketService = async (ticketId, numberPlace) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .post(
            buy_ticket_endPoint(ticketId, numberPlace), undefined,
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
            return {
                isError: true,
                message: e.response.data["message"],
                data: e.response.data,
            };
        });
};

// Get all ticket of current user
export const MyTicketsService = async () => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(
            My_Ticket_endPoint,
            {
                headers,
            }
        )
        .then((response) => {
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
                data: e.response.data,
            };
        });
};