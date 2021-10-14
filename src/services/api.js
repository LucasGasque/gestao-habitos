import axios from 'axios'

const api = axios.create({
    baseURL: 'https://habit-docs.vercel.app/'
})

export default api