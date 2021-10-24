import axios from "axios";
const baseURL = '/api/users'

const register = async (creds)  =>{
    const response = await axios.post(baseURL, creds)
    return response.data
}

export default {register}