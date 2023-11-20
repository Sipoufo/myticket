import axios from "axios";
import { RemoveItems } from "./token";

export const FetchAllCategories = async () => {
    return axios
        .get(`${process.env.REACT_APP_API_URL}/api/category`)
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
