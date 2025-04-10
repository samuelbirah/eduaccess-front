import api from "./axios";

export const loginUser = async (credentials: { email: string; password: string}) => {
    const response = await api.post("/auth/login", credentials)
    return response.data    
}

export const registerUser = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const response = await api.post("/auth/register", data);
    return response.data;
  };