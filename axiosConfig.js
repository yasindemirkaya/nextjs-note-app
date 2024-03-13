import axios from 'axios'

const baseURL = process.env.DEV_BASE_URL

const axiosInstance = axios.create({
    baseURL,
})

export default axiosInstance