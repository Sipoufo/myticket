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
export const Fetch_events_by_categoryId_endpoint = (id, pageNumber, pageSize) =>
    URL + "/api/permit/event/" + id + "/" + pageNumber + "/" + pageSize;
export const Fetch_events_by_isPublish_endpoint = (isPublish, pageNumber, pageSize) =>
    URL + "/api/event/isPublish/" + isPublish + "/" + pageNumber + "/" + pageSize;
export const Fetch_old_events_by_isPublish_endpoint = (isPublish, pageNumber, pageSize) =>
    URL + "/api/event/lessThantToday/" + isPublish + "/" + pageNumber + "/" + pageSize;
export const Fetch_next_events_by_isPublish_endpoint = (isPublish, pageNumber, pageSize) =>
    URL + "/api/event/greaterThantToday/" + isPublish + "/" + pageNumber + "/" + pageSize;
