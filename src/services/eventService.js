import { GetToken } from "./token";
import {
    CreateEvent_endpoint,
    Fetch_events_by_categoryId_endpoint,
    Fetch_events_by_isPublish_endpoint,
    Fetch_oneEvent_endpoint,
} from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";

const headers = { Authorization: "Bearer " + GetToken() };

// Fetch all event without restriction
export const FetchAllEvents = async (pageNumber, pageSize) => {
    try {
        if (!VerifyToken() && GetToken() == null) {
            window.location.replace("/");
        }
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/permit/event/${pageNumber}/${pageSize}`,
            {
                headers,
            }
        );
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
        !VerifyToken() && window.location.replace("/");
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
        if (!VerifyToken() && GetToken() == null) {
            window.location.replace("/");
        }
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

// Fetch events by categoryId
export const FetchEventsByCategoryId = async (
    categoryId,
    pageNumber,
    pageSize
) => {
    try {
        if (!VerifyToken() && GetToken() == null) {
            window.location.replace("/");
        }
        const response = await axios.get(
            Fetch_events_by_categoryId_endpoint(
                categoryId,
                pageNumber,
                pageSize
            ),
            {
                headers,
            }
        );
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

// Fetch events by categoryId
export const FetchEventsByIsPublish = async (
    isPublish,
    pageNumber,
    pageSize
) => {
    try {
        !VerifyToken() && window.location.replace("/");
        const response = await axios.get(
            Fetch_events_by_isPublish_endpoint(isPublish, pageNumber, pageSize),
            {
                headers,
            }
        );
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
