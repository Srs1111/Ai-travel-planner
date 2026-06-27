import axios from "axios"

const api = axios.create({
    baseURL: "https://ai-travel-planner-3-98sq.onrender.com"
})

export default api;