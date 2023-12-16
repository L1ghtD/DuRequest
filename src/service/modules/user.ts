import { duRequest2 } from "..";

duRequest2.request({
  url: "/entire/list",
  params: {
    offset: 0,
    size: 20
  }
}).then(res => {
  console.log(res)
})

// 同一实例的不同请求拦截
duRequest2.request({
  url: "/home/highscore",
  interceptors: {
    requestSuccessFunc: (config) => {
      console.log("/home/highscore请求成功的拦截")
      return config
    },
    responseSuccessFunc: (config) => {
      console.log("/home/highscore响应成功的拦截")
      return config
    },
  }
}).then(res => {
  console.log(res)
})