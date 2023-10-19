// Token
export const GetToken = () => {
    return sessionStorage.getItem("token");
}

export const SetToken = (token) => {
    sessionStorage.setItem('token', token);
}

// UserName
export const GetUserName = () => {
    return sessionStorage.getItem("userName") ? sessionStorage.getItem("userName") : "";
}

export const SetUserName = (userName) => {
    sessionStorage.setItem('userName', userName);
}

// Account State
export const GetAccountState = () => {
    return sessionStorage.getItem("accountState");
}

export const SetAccountState = (accountState) => {
    sessionStorage.setItem('accountState', accountState);
}