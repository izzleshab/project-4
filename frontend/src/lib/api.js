import axios from 'axios'

const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

// turtles

export const getAllTurtles = () => {
  return axios.get(`${baseUrl}/turtles`)
}

export const getSingleTurtle = turtleId => {
  return axios.get(`${baseUrl}/turtles/${turtleId}`)
}

export const createTurtle = formData => {
  return axios.post(`${baseUrl}/turtles/`, formData, withHeaders())
}

export const updateTurtle = (id, formData) => {
  return axios.put(`${baseUrl}/turtles/${id}/`, formData, withHeaders())
}

// auth

export const registerUser = formData => {
  return axios.post(`${baseUrl}/auth/register/`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/auth/login/`, formData)
}

// profile

export const getUserProfile = () => {
  return axios.get(`${baseUrl}/auth/profile`, withHeaders())
}

