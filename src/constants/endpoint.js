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
export const FetchAllEvents_endpoint = (pageNumber, pageSize) =>
    URL + "/api/permit/event/" + pageNumber + "/" + pageSize;
export const Fetch_oneEvent_endpoint = (id) => URL + "/api/permit/event/" + id;
export const Fetch_events_by_categoryId_endpoint = (id, pageNumber, pageSize) =>
    URL + "/api/permit/event/" + id + "/" + pageNumber + "/" + pageSize;
export const Fetch_events_by_isPublish_endpoint = (
    isPublish,
    pageNumber,
    pageSize
) =>
    URL +
    "/api/event/isPublish/" +
    isPublish +
    "/" +
    pageNumber +
    "/" +
    pageSize;
export const Fetch_old_events_by_isPublish_endpoint = (
    isPublish,
    pageNumber,
    pageSize
) =>
    URL +
    "/api/event/lessThantToday/" +
    isPublish +
    "/" +
    pageNumber +
    "/" +
    pageSize;
export const Fetch_next_events_by_isPublish_endpoint = (
    isPublish,
    pageNumber,
    pageSize
) =>
    URL +
    "/api/event/greaterThantToday/" +
    isPublish +
    "/" +
    pageNumber +
    "/" +
    pageSize;
export const publish_event_endpoint = (eventId, isPublish) =>
    URL + "/api/event/publish/" + eventId + "/" + isPublish;
export const updateEvent_endpoint = URL + "/api/event";

export const deleteEvent_endpoint = (eventId) => URL + "/api/event/" + eventId;

// Ticket
export const Ticket_by_eventId_endPoint = (eventId) =>
    URL + "/api/ticket/" + eventId;

export const Ticket_by_ticketId_endPoint = (ticketId) =>
    URL + "/api/ticket/oneTicket/" + ticketId;

// Ticket Update
export const TicketUpdate_by_ticketId_endPoint =(ticketId) => 
    URL + "/api/ticket/" + ticketId;

export const buy_ticket_endPoint = (ticketId, numberPlace) =>
    URL + "/api/ticket/paid/" + ticketId + "/" + numberPlace;
export const My_Ticket_endPoint = (pageNumber, pageSize) =>
    URL + "/api/ticket/myTicket/" + pageNumber + "/" + pageSize;
export const My_Ticket_by_eventId_endPoint = (eventId) =>
    URL + "/api/ticket/myTicket/event/" + eventId;

// Ticket Type
export const Ticket_type_endPoint = URL + "/api/ticketType";

//Ticket Buy 
export const TicketBuy_endPoint = (ticketId, currentPage, itemsPerPage) => URL + "/api/ticketBuy/ticket/"+ ticketId+ "/" + currentPage + "/" + itemsPerPage;
