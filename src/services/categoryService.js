import axios from "axios";

export const FetchAllCategories = async () => {
    try {
        const response = await axios.get(
            `http://localhost:8080/api/category`,
        );
        return {
            isError: false,
            message: response.data,
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
