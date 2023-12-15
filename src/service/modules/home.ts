import duRequest from "..";

duRequest.request({
    url: "/home/multidata"
}).then(res =>{
    console.log(res.data);
})
