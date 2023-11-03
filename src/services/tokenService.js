import axios from "axios";
import Cookies from "universal-cookie";
import { GetToken, SetToken, SetUserName } from "./token";

const cookies = new Cookies();
const headers = { Authorization: "Bearer " + GetToken() };

export const VerifyToken = async () => {
    try {
        await axios.post(
            `${process.env.REACT_APP_API_URL}/api/auth/verifyAccessToken`,
            undefined,
            {
                headers,
            }
        );

        return true;
    } catch (e) {
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/api/auth/verifyRefreshToken`,
                {
                    refreshToken: cookies.get("refreshToken"),
                }
            );

            try {
                const response = await axios.post(
                    `${process.env.REACT_APP_API_URL}/api/auth/verifyRefreshToken`,
                    {
                        refreshToken: cookies.get("refreshToken"),
                    }
                );
                SetToken(await response.data["token"]);
                SetUserName(await response.data["firstName"]);
                return true;
            } catch (error) {
                return false;
            }
        } catch (error) {
            return false;
        }
    }
};
