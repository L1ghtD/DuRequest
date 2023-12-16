import axios from "axios"
import type { AxiosInstance } from "axios"
import DuRequestConfig from "./type"

/*
* 1 拦截器有三种情况
*   - 全局拦截器，用于在创建所有实例时生效 
*   - 实例拦截器，用于针对每个实例初始化的拦截器
*   - 请求拦截器，对于同一实例的不同请求，做出不同的拦截行为
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
    // 和上面的全局拦截器相比
    // 请求：后定义的先执行, 响应：后定义的后执行
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFunc,
      config.interceptors?.requestFailFunc
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFunc,
      config.interceptors?.responseFailFunc
    )
  }

  // 对于同一实例的不同请求，不能直接加在 request config 里的 interceptors 属性中
  // 因为同一实例的 interceptors 属性是共享的,会存在干扰
  request(config: DuRequestConfig) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFunc){
      // 手动执行该次请求的 requestSuccessFunc
      config.interceptors.requestSuccessFunc(config)
    }

    // return this.instance.request(config)
    // 对于单次响应的拦截处理，应该在返回 promise 之前处理，所以需要手动构造一个promise，在里面插入逻辑
    return new Promise((resove, reject)=>{
      this.instance.request(config).then(res => {
        // 在 res 返回之前执行 responeSucessFunc
        if (config.interceptors?.responseSuccessFunc){
         config.interceptors.responseSuccessFunc(res)
        }
        resove(res)
      }).catch(err => {
        reject(err)
      })

    })
  }

  get() { }
  post() { }
}

export default DuRequest