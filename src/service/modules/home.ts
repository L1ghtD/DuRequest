import { Axios, AxiosPromise, AxiosResponse } from "axios";
import duRequest from "..";

// 针对该请求细化 data 类型
interface IHomeData {
    data: any[]
    returnCode: string
    success: boolean
}

// 在修改了 request 的返回值为 Promise 后，Promise 的类型为 unknow，因此不能从 res.data 取值
// duRequest.request({
duRequest.request<IHomeData>({
    url: "/home/multidata"
}).then(res =>{
    console.log(res.data, res.returnCode, res.success);
})
