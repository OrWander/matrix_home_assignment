import axios, { AxiosError } from "axios";

const axiosInstance: any = axios.create({ baseURL: "https://dummyjson.com/products" });

axiosInstance.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: AxiosError) => {
        alert("Sorry! the API is currently unavailable")
        return Promise.reject(error);
    }
);

export default axiosInstance;
