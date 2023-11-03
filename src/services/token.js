import { Decrypt, Encrypt } from "../helpers/encryptHelper";

// Token
export const GetToken = () => {
    if (!sessionStorage.getItem("token")) {
        return null;
    }
    return Decrypt(sessionStorage.getItem("token"));
};

export const SetToken = (token) => {
    sessionStorage.setItem("token", Encrypt(token));
};

// UserName
export const GetUserName = () => {
    return sessionStorage.getItem("userName")
        ? sessionStorage.getItem("userName")
        : "";
};

export const SetUserName = (userName) => {
    sessionStorage.setItem("userName", userName);
};

// Account State
export const GetAccountState = () => {
    return sessionStorage.getItem("accountState");
};

export const SetAccountState = (accountState) => {
    sessionStorage.setItem("accountState", accountState);
};

export const RemoveItems = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("accountState");
};

// Refresh token
// export const GetRefreshToken = () => {
//     if (!sessionStorage.getItem("refreshToken")) {
//         return null;
//     }
//     return Decrypt(sessionStorage.getItem("refreshToken"));
// }

// export const SetRefreshToken = (refreshToken) => {
//     sessionStorage.setItem('refreshToken', Encrypt(refreshToken));
// }
