import { GetToken, RemoveItems } from "./token";
import {
    CreateEvent_endpoint,
    FetchAllEvents_endpoint,
    Fetch_events_by_categoryId_endpoint,
    Fetch_events_by_isPublish_endpoint,
    Fetch_next_events_by_isPublish_endpoint,
    Fetch_old_events_by_isPublish_endpoint,
    Fetch_oneEvent_endpoint,
    publish_event_endpoint,
    updateEvent_endpoint,
    deleteEvent_endpoint,
} from "../constants/endpoint";
import axios from "axios";
import { VerifyToken } from "./tokenService";

const headers = { Authorization: "Bearer " + GetToken() };

// Fetch all event without restriction
export const FetchAllEvents = async (pageNumber, pageSize) => {
    return axios
        .get(
            FetchAllEvents_endpoint(pageNumber, pageSize),
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

// Create one event by token
export const createEventService = async (data) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    console.log(headers);
    console.log(data);
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

// Fetch one event by id
export const FetchOneEvent = async (eventId) => {
    // await VerifyToken();
    if (!VerifyToken()) {
        window.location.replace("/");
    }
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

// Fetch events by categoryId
export const FetchEventsByCategoryId = async (
    categoryId,
    pageNumber,
    pageSize
) => {
    // await VerifyToken();
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

// Update Event
export const UpdateEventService = async (data) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    console.log(data);
    return axios
        .put(updateEvent_endpoint, data, {
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

// Update Event
export const PublishEventService = async (eventId, isPublished) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    console.log("response");
    return axios
        .get(publish_event_endpoint(eventId, isPublished), {
            headers,
        })
        .then((response) => {
            console.log("response");
            console.log(response);
            return {
                isError: false,
                message: response.data.message,
                data: response.data,
            };
        })
        .catch((e) => {
            console.log(e);
            if (!e.response) {
                RemoveItems();
                window.location.replace("/error");
            }
            if (e.response["status"] !== 400) {
                RemoveItems();
                window.location.replace("/error");
            } else {
                return {
                    data: e.response["data"],
                    isError: true,
                    code: e.response.status,
                    message: e.response.data["message"],
                };
            }
        });
};

  export const deleteEvent = async (eventId) => {
    if (!VerifyToken()) {
        window.location.replace("/");
    }
    return axios
        .delete(deleteEvent_endpoint(eventId), {
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