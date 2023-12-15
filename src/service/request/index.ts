import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import DuRequestConfig from "./type"

/*
* 1 拦截器有三种情况
*   - 全局拦截器，用于在创建所有实例时生效 
*   - 实例拦截器，用于针对每个实例初始化的拦截器
*/


class DuRequest {
  instance: AxiosInstance

  // request 实例 => axios 实例
  constructor(config: DuRequestConfig) {
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

    /*
    // 原写法
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSucessFunc,
        config.interceptors.requestFailFunc
      )
      this.instance.interceptors.response.use(
        config.interceptors.responseSucessFunc,
        config.interceptors.responseFailFunc
      )
    }
    */
    // 简写，使用可选链操作符?.
    this.instance.interceptors.request.use(
      config.interceptors?.requestSucessFunc,
      config.interceptors?.requestFailFunc
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSucessFunc,
      config.interceptors?.responseFailFunc
    )
  }

  request(config: DuRequestConfig) {
    return this.instance.request(config)
  }

  get() { }
  post() { }
}

export default DuRequest