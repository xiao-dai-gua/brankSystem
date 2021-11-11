import { get,post,del,put } from "../utils/request";
//!获取页面
export function showmessage(){
    return get("/showMessage")
}
//!创建数据
export function createmessage(data){
    return post("/insertAllMessage",data)
}
//!修改数据
export function updatamessage(data){
    return put("/updateMessage",data);
}
//!删除数据
export function delmessage(id){
    return del("/delOneMessage",id)
}
//!根据地址筛选信息
export function searchaddressid(addressid){
    return post("/searchaddressid",addressid);
}
