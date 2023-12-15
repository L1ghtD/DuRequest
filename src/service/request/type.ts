import type { InternalAxiosRequestConfig, AxiosResponse, AxiosRequestConfig } from "axios"

interface DuInterceptors {
    requestSucessFunc?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestFailFunc?: (err: any) => any
    responseSucessFunc?: (res: AxiosResponse) => AxiosResponse
    responseFailFunc?: (err: any) => any
  }

// 原AxiosRequestConfig是没有这个属性，因此需要扩展
// 该属性用于在原有的 config 新增拦截器属性，用于在初始化实例的时候传递
interface DuRequestConfig extends AxiosRequestConfig {
  interceptors?: DuInterceptors
}

export default DuRequestConfig