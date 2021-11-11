import {post} from "../utils/request"

export function wxhead(sfile){
    return post("/getMessageA",sfile);
}
export function wxcode(sweixin){
    return post("/getMessageB",sweixin);
}