import axios from "axios"

const baseApi = 'https://api.spacexdata.com/v3'

const fetcher = axios.create({
    baseURL: baseApi,
    withCredentials: false,
})

export default fetcher