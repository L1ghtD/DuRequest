import { duRequest2 } from "..";

// 这里也可以细化返回类型，就省略了
duRequest2.request({
  url: "/entire/list",
  params: {
    offset: 0,
    size: 20
  }
}).then(res => {
  console.log(res)
})

interface IHighScore {
  list: any[]
  subtitle: string
  title: string
}

// 同一实例的不同请求拦截
duRequest2.request<IHighScore>({
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
  console.log(res.subtitle, res.title)
})