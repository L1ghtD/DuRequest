import { BASE_URL, TIME_OUT } from "./config/index";
import DuRequest from "./request";

const duRequest = new DuRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 实例2，该实例用于测试针对于每个实例添加的拦截
export const duRequest2 = new DuRequest({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 8000,

  interceptors: {
    requestSucessFunc: (config) => {
      console.log("2号实例请求成功拦截器");
      return config
    },
    requestFailFunc: (err) => {
      console.log("2号实例请求失败拦截器");
      return err
    },
    responseSucessFunc: (res) => {
      console.log("2号实例响应成功拦截器");
      return res
    },
    responseFailFunc: (err) => {
      console.log("2号实例响应失败拦截器");
      return err
    }
  }
})

export default duRequest