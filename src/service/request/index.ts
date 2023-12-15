import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig } from "axios"

class DuRequest {
  instance: AxiosInstance

  // request 实例 => axios 实例
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(config =>{
      console.log("全局请求成功拦截器");
      return config
    }, err => {
      console.log("全局请求失败拦截器");
      return err
    })

    this.instance.interceptors.response.use(config => {
      console.log("全局响应成功拦截器");
      return config
    }, err => {
      console.log("全局响应失败拦截器");
      return err
    })
  }

  request(config: AxiosRequestConfig ) {
    return this.instance.request(config)
  }

  get() { }
  post() { }
}

export default DuRequest