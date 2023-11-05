import axios from "axios";
import Cookies from "universal-cookie";
import { GetToken, SetToken } from "./token";

const cookies = new Cookies(null, { path: "/" });
const headers = { Authorization: "Bearer " + GetToken() };

export const VerifyToken = async () => {
    await axios
        .post(
            `${process.env.REACT_APP_API_URL}/api/auth/verifyAccessToken`,
            undefined,
            {
                headers,
            }
        )
        .then(async (resultVerifyAccessToken) => {
            if (!resultVerifyAccessToken["isValid"]) {
                await axios
                    .post(
                        `${process.env.REACT_APP_API_URL}/api/auth/verifyRefreshToken`,
                        {
                            refreshToken: cookies.get("refreshToken"),
                        }
                    )
                    .then(async (resultVerifyRefreshToken) => {
                        if (resultVerifyRefreshToken["isValid"]) {
                            await axios
                                .post(
                                    `${process.env.REACT_APP_API_URL}/api/auth/refresh`,
                                    {
                                        refreshToken:
                                            cookies.get("refreshToken"),
                                    }
                                )
                                .then(async (response) => {
                                    SetToken(await response.data["token"]);
                                    return true;
                                })
                                .catch((e) => {
                                    return false;
                                });
                        } else {
                            return false;
                        }
                    }).catch(e => {
                        return false;
                    });
            } else {
                return true;
            }
        }).catch(e => {
            return false;
        });
};
