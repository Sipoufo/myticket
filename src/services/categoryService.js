import axios from "axios";

export const FetchAllCategories = async () => {
    try {
        const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/category`,
        );
        return {
            isError: false,
            message: null,
            data: await response.data,
        };
    } catch (e) {
        return {
            isError: true,
            message: await e.response.data["message"],
            data: null,
        };
    }
};
