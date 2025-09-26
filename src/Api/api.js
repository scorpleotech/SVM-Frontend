// configure axios create
import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// get token from state

const getToken = () => {
    const token = localStorage.getItem("userToken");
    if (token && token !== "undefined") {
        const obj = JSON.parse(token);
        return obj
    }
};

const getAuthorizationHeader = () => `Bearer ${getToken()}`;
const authApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Authorization: getAuthorizationHeader(),
    },
});

const authImageApi = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "multipart/form-data",
        type: "formData",
        Authorization: getAuthorizationHeader(),
    },
});

export { api, authApi, authImageApi, getAuthorizationHeader };
