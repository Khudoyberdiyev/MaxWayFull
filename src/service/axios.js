import axios from "axios";

const api = axios.create({
    baseURL: "https://66340e389bb0df2359a09fc2.mockapi.io/api/v1"
})

export default api;