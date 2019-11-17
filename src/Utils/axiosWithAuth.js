import axios from "axios"

const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL: "WHATEVER BACKEND URL",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;