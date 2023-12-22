import axios from "axios"
const baseURL = `http://localhost:3001/api`

export const clientSecretAPI = async (input) => {
    return await axios.get(`${baseURL}/element/secret`, input)
}