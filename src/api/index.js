import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/users',
})

axiosInstance.interceptors.request.use(
    config => {
  
      config.headers = {
        'Access-Control-Allow-Origin': '',
        'Content-Type': 'application/json',
      }
  
      return config
    },
  )


export default axiosInstance