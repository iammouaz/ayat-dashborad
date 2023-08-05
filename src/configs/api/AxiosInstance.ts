/* eslint-disable no-param-reassign */
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { AES } from 'crypto-js'
import { useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const axiosClient = axios.create()

export const useAxiosInstance = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const location = useLocation()

  axiosClient.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

  axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (location.pathname !== '/login' && error.response.status === 401) {
        setTimeout(() => navigate('/login'), 500)
        setTimeout(() => navigate(0), 500)
      }

      return Promise.reject(error)
    },
  )

  axiosClient.interceptors.request.use((config) => {
    const token = Cookies.get('token')
    if (token) {
      const secretKey = import.meta.env.VITE_API_SECRET_KEY
      const decryptedAuthToken = AES.decrypt(token, secretKey).toString()
      if (config.headers && decryptedAuthToken) {
        if (!config?.headers?.Authorization) {
          config.headers.Authorization = `Bearer ${decryptedAuthToken}`
        }
      }
    }
    return config
  })

  function setAuthToken(encryptedToken: string) {
    const secretKey = import.meta.env.VITE_API_SECRET_KEY
    const decryptedAuthToken = AES.decrypt(encryptedToken, secretKey).toString()
    axiosClient.interceptors.request.use((config) => {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${decryptedAuthToken}`
      }
      return config
    })
  }

  return { axiosClient, setAuthToken }
}
