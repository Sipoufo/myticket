import { My_Ticket_by_eventId_endPoint, My_Ticket_endPoint, Ticket_by_eventId_endPoint, buy_ticket_endPoint, TicketUpdate_by_ticketId_endPoint, TicketBuy_endPoint, Ticket_by_ticketId_endPoint } from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";
import { GetToken, RemoveItems } from "./token";

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
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                RemoveItems();
                window.location.replace("/error");
            }else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
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

// Get all ticket of current user
export const MyTicketsService = async () => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(
            My_Ticket_endPoint(1, 10),
            {
                headers,
            }
        )
        .then((response) => {
            console.log(response)
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

// Fetch all ticket buy by event by id
export const FetchTicketByEventId = async (eventId) => {
    // await VerifyToken();
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    console.log("response");
    return axios
        .get(My_Ticket_by_eventId_endPoint(eventId), {
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

// Update one ticket by ticketId
export const UpdateOneTicket = async (data, ticketId) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .put(
            TicketUpdate_by_ticketId_endPoint(ticketId), data,
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
            }else {
                return {
                    data: null,
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};


 export const FetchOneTicketByTicketId = async (ticketId) => {
    // await VerifyToken();
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    try {
        const response = await axios.get(Ticket_by_ticketId_endPoint(ticketId), { headers });
        return {
            isError: false,
            message: null,
            data: response.data,
        };
    } catch (e) {
        if (!e.response) {
            // RemoveItems();
            // window.location.replace("/error");
        } else if (e.response.status !== 400) {
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
    }
};

export const FetchTicketBuyByTicketId = async (ticketId) => {
    // await VerifyToken();
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    try {
        const response = await axios.get(TicketBuy_endPoint(ticketId), { headers });
        return {
            isError: false,
            message: null,
            data: response.data,
        };
    } catch (e) {
        if (!e.response) {
            RemoveItems();
            window.location.replace("/error");
        } else if (e.response.status !== 400) {
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
    }
};