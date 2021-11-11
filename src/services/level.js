import {post,get, del} from "../utils/request"

//!增加
export function addLevel(data){
    return post('/insertOneLevel',data)
}
//!展示
export function showLevel(){
    return get('/showLevel')
}
//!删除
export function delLevel(levelid){
    return del('/delOneLevel',levelid);//todo 传递的时候就不要在加{}
}