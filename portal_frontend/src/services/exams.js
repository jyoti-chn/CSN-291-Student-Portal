import axios from 'axios'
const baseURL = '/api/exams'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getExams = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createExam = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    console.log(newObject)

    const response = await axios.post(baseURL, newObject, config)
    // console.log('hello')
    return response.data
}

export default { getExams, createExam, setToken }
