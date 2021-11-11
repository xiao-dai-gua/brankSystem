//!引入数据接口
import {get,post,del}from "../utils/request"

//!获取所有地址信息
export function showaddress(){
    return get("/showAddresses")
}

//!增加地址信息
export function addaddress(data){
    return post("/insertOneAddress",data)
}

//!删除地址信息
export function deladdress(addressid){
    return del("/delOneAddress",addressid)
}