import axios from "axios";
const baseURL = '/api/login'

const login = async (creds) => {
    const response = await axios.post(baseURL, creds)
    return response.data
}

export default { login }