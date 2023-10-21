import { GetToken } from "./token";
import axios from "axios";

const headers = { Authorization: "Bearer " + GetToken()};

export const FetchAllEvents = async (pageNumber, pageSize) => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/permit/event/${pageNumber}/${pageSize}`,
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
