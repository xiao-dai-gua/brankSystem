import axios from 'axios'
import { getToken } from './auth';

const instance  = axios.create({
    baseURL:"http://47.92.82.13:4000",
    timeout:5000     //todo 五秒钟超时
})

//! 设置全局的请求次数，和请求的间隙
instance.defaults.retry=4;
instance.defaults.retryDelay = 1000;

// 拦截器 //! 全局请求拦截 发送请求之前执行

// instance.interceptors.request.use(
//     function(config){
//         //todo 检验用户信息在发送请求时先验证
//         config.headers["authorization"] = "Bearer"+getToken();
//         return config;
//     },
//     function(error){
//     return Promise.reject(error);//todo 请求错误的时候应该做什么
// });
instance.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    // If config does not exist or the retry option is not set, reject
    if(!config || !config.retry) return Promise.reject(err);
    
    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;
    
    // Check if we've maxed out the total number of retries
    if(config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }
    
    // Increase the retry count
    config.__retryCount += 1;
    
    // Create new promise to handle exponential backoff
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
        config.headers["authorization"] = "Bearer"+getToken();//todo验证信息
        // return config;
    });
});

// //!请求返回之后执行
instance.interceptors.response.use(
    function (response){
    // return response.data;//todo 得到数据之后进行验证
    return response;
},function(error){
    return Promise.reject(error);
});

//! 获取信息管理数据
export function get(url){
    return instance.get(url)
}
//! 修改数据
export function post(url,data){
    return instance.post(url,data)
}

//!增加数据
export function put(url,data){
    return instance.put(url,data)
}
//! 删除数据
export function del(url,params){
    return instance.get(url,{params})//todo 传递params的时候必须加上{}
}