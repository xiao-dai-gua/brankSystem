export function getToken(){
    return localStorage.getItem('token')
}
export function setToken(token){
    localStorage.setItem("token",token)
}
export function clearToken(){
     localStorage.removeItem('token')
}
export function isLogined(){
    if(localStorage.getItem('token')){//todo 判断这个值是否存在
        return true
    }
    return false
}