const URL = process.env.REACT_APP_API_URL;

// Authentication
export const SignIn_endpoint = URL + "/api/auth/signin";
export const SignUp_endpoint = URL + "/api/auth/signup";
export const ForgetPassword_endpoint = URL + "/api/auth/forgetPassword";
export const ResetPassword_endpoint = URL + "/api/auth/resetPassword";

// Users
export const UserInfoByToken_endpoint = URL + "/api/users";

// Event
export const CreateEvent_endpoint = URL + "/api/event";
export const Fetch_oneEvent_endpoint = (id) => URL + "/api/permit/event/" + id;
