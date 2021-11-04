import axios from 'axios'
const baseURL = '/api/tuts'

let token = null
const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getNotes = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const createNote = async newObject => {
    const config = {
        headers: { Authorization: token },
    }

    const response = await axios.post(baseURL, newObject, config)
    console.log('hello')
    return response.data
}

const removeNote = async (id) => {
    const config = {
      headers : { Authorization : token },
    }
    const response = await axios.delete(`${baseURL}/${id}`,config)
    return response
  }

export default { getNotes, createNote, setToken, removeNote }
