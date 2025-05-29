import axios from "axios";

const api = axios.create({
    // baseURL: "https://eduaccess-back.onrender.com/api",
    baseURL: "http://localhost:5000/api",
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("eduaccess-token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})

export default api