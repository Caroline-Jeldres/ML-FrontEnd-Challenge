import axios from 'axios'
/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
    baseURL: 'https://api.mercadolibre.com'
  })
  

// Manejo de códigos de error del backend.
client.interceptors.response.use(
  (response) => {
    if (response.config.responseType === 'blob') {
      return response
    }

    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * Request Wrapper with default success/error actions
 */
const request = (options) => {
  const onSuccess = (response) => {
    return response
  }

  const onError = (error) => {
    return Promise.reject(error)
  }

  return client(options).then(onSuccess).catch(onError)
}

export default request
