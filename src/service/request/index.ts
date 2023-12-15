import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"

class DuRequest {
  instance: AxiosInstance

  // request 实例 => axios 实例
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get() { }
  post() { }
}

export default DuRequest