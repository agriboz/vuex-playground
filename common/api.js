import Vue from 'vue'
import axios from 'axios'
import Buefy from 'buefy'

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})

let LoadingInstance
const Toast = Vue.prototype.$toast
const isLoading = Vue.prototype.$loading

export const api = axios.create({
  baseURL: `//localhost:8080/`
})

api.interceptors.request.use(
  config => {
    LoadingInstance = isLoading.open()
    return config
  },
  error => {
    LoadingInstance.close()
    Toast.open({
      type: 'is-danger',
      message: 'Load time out'
    })

    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    LoadingInstance.close()
    return response
  },
  error => {
    LoadingInstance.close()
    if (error.response === 401) {
      Toast.open({
        type: 'is-danger',
        message: error.message
      })
    }
    return Promise.reject(error)
  }
)
