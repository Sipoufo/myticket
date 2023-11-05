import { GetToken } from "./token";
import {
    CreateEvent_endpoint,
    Fetch_events_by_categoryId_endpoint,
    Fetch_events_by_isPublish_endpoint,
    Fetch_next_events_by_isPublish_endpoint,
    Fetch_old_events_by_isPublish_endpoint,
    Fetch_oneEvent_endpoint,
} from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";

const headers = { Authorization: "Bearer " + GetToken() };

// Fetch all event without restriction
export const FetchAllEvents = async (pageNumber, pageSize) => {
    await VerifyToken();
    return axios
        .get(
            `${process.env.REACT_APP_API_URL}/api/permit/event/${pageNumber}/${pageSize}`,
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
                data: [],
            };
        });
};

// Create one event by token
export const createEventService = async (data) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .post(CreateEvent_endpoint, data, {
            headers,
        })
        .then((response) => {
            return {
                isError: false,
                message: response.data["message"],
                data: null,
            };
        })
        .catch((e) => {
            return {
                isError: true,
                message: e.response.data["message"],
                data: null,
            };
        });
};

// Fetch one event by id
export const FetchOneEvent = async (eventId) => {
    await VerifyToken();
    return axios
        .get(Fetch_oneEvent_endpoint(eventId), {
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
                data: {},
            };
        });
};

// Fetch events by categoryId
export const FetchEventsByCategoryId = async (
    categoryId,
    pageNumber,
    pageSize
) => {
    await VerifyToken();
    return axios
        .get(
            Fetch_events_by_categoryId_endpoint(
                categoryId,
                pageNumber,
                pageSize
            ),
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
            console.log(e);
            return {
                isError: true,
                message: e.response.data["message"],
                data: {},
            };
        });
};

// Fetch events by categoryId
export const FetchEventsByIsPublish = async (
    isPublish,
    pageNumber,
    pageSize
) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(
            Fetch_events_by_isPublish_endpoint(isPublish, pageNumber, pageSize),
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
            console.log(e);
            return {
                isError: true,
                message: e.response.data["message"],
                data: {},
            };
        });
};

// Fetch old events by categoryId
export const FetchOldEventByIsPublish = async (
    isPublish,
    pageNumber,
    pageSize
) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(
            Fetch_old_events_by_isPublish_endpoint(
                isPublish,
                pageNumber,
                pageSize
            ),
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
            console.log(e);
            return {
                isError: true,
                message: e.response.data["message"],
                data: {},
            };
        });
};

// Fetch next events by categoryId
export const FetchNextEventByIsPublish = async (
    isPublish,
    pageNumber,
    pageSize
) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .get(
            Fetch_next_events_by_isPublish_endpoint(
                isPublish,
                pageNumber,
                pageSize
            ),
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
            console.log(e);
            return {
                isError: true,
                message: e.response.data["message"],
                data: {},
            };
        });
};
