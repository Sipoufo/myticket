import { GetToken } from "./token";
import { CreateEvent_endpoint, Fetch_oneEvent_endpoint } from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";

const headers = { Authorization: "Bearer " + GetToken() };

// Fetch all event without restriction
export const FetchAllEvents = async (pageNumber, pageSize) => {
    let response;
    try {
        if (GetToken()) {
            if (VerifyToken()) {
                response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/api/permit/event/${pageNumber}/${pageSize}`,
                    {
                        headers,
                    }
                );
            } else {
                window.location.replace("/");
            }
        } else {
            response = await axios.get(
                `${process.env.REACT_APP_API_URL}/api/permit/event/${pageNumber}/${pageSize}`,
                {
                    headers,
                }
            );
        }
        return {
            isError: false,
            message: null,
            data: response.data,
        };
    } catch (e) {
        return {
            isError: true,
            message: e.response.data["message"],
            data: [],
        };
    }
};

// Create one event by token
export const createEventService = async (data) => {
    try {
        const response = await axios.post(CreateEvent_endpoint, data, {
            headers,
        });
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

// Fetch one event by id
export const FetchOneEvent = async (eventId) => {
    try {
        const response = await axios.get(Fetch_oneEvent_endpoint(eventId), {
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
            data: {},
        };
    }
};
