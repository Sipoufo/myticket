import axios from "axios";
import Cookies from "universal-cookie";
import { GetToken, RemoveItems, SetToken } from "./token";

const cookies = new Cookies(null, { path: "/" });
const headers = { Authorization: "Bearer " + GetToken() };

export const VerifyToken = async () => {
    return axios
        .post(
            `${process.env.REACT_APP_API_URL}/api/auth/verifyAccessToken`,
            undefined,
            {
                headers,
            }
        )
        .then( (resultVerifyAccessToken) => {
            if (!resultVerifyAccessToken["data"]["valid"]) {
                axios
                    .post(
                        `${process.env.REACT_APP_API_URL}/api/auth/verifyRefreshToken`,
                        {
                            refreshToken: cookies.get("refreshToken"),
                        }
                    )
                    .then( (resultVerifyRefreshToken) => {
                        if (resultVerifyRefreshToken["data"]["valid"]) {
                            axios
                                .post(
                                    `${process.env.REACT_APP_API_URL}/api/auth/refresh`,
                                    {
                                        refreshToken:
                                            cookies.get("refreshToken"),
                                    }
                                )
                                .then((response) => {
                                    SetToken(response.data["token"]);
                                    console.log("ok");
                                    return true;
                                })
                                .catch((e) => {
                                    RemoveItems();
                                    return false;
                                });
                        } else {
                            console.log(resultVerifyAccessToken["data"]);
                            RemoveItems();
                            return false;
                        }
                    })
                    .catch((e) => {
                        RemoveItems();
                        return false;
                    });
            } else {
                console.log("ok");
                return true;
            }
        })
        .catch((e) => {
            RemoveItems();
            return false;
        });
};
