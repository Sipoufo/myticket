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
    // if (!sessionStorage.getItem("userName")) {
    //     sessionStorage.clear();
    //     return null;
    // }
    // return Decrypt(sessionStorage.getItem("userName"));
    return sessionStorage.getItem("userName")
        ? sessionStorage.getItem("userName")
        : "";
};

export const SetUserName = (userName) => {
    sessionStorage.setItem("userName", userName);
};

// User Id
export const GetUserId = () => {
    if (!sessionStorage.getItem("userId")) {
        sessionStorage.clear();
        return null;
    }
    return Decrypt(sessionStorage.getItem("userId"));
};

export const SetUserId = (userId) => {
    sessionStorage.setItem("userId", Encrypt(userId));
};

// Account State
export const GetAccountState = () => {
    if (!sessionStorage.getItem("accountState")) {
        sessionStorage.clear();
        return null;
    }
    return sessionStorage.getItem("accountState");
};

export const SetAccountState = (accountState) => {
    sessionStorage.setItem("accountState", accountState);
};

export const RemoveItems = () => {
    sessionStorage.clear();
    sessionStorage.removeItem("token")
};

// User Role
export const GetUserRole = () => {
    if (!sessionStorage.getItem("userRole")) {
        sessionStorage.clear();
        return null;
    }
    return sessionStorage.getItem("userRole");
};

export const SetUserRole = (userRole) => {
    sessionStorage.setItem("userRole", userRole);
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
