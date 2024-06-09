import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'https://eco-sort-data.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }

})

export default baseUrl
