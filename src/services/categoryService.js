import axios from "axios";

export const FetchAllCategories = async () => {
    return axios
        .get(`${process.env.REACT_APP_API_URL}/api/category`)
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
                data: null,
            };
        });
};
