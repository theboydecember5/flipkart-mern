import { api } from "../urlConfig";
import axios from 'axios'

const token = window.localStorage.getItem('token')


const axiosIntance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        authorization: token ? `Bearer ${token}` : ''
    }
})

export default axiosIntance