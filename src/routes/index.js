import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Addlevel from "../pages/admin/level/Addlevel";
import Showlevel from "../pages/admin/level/Showlevel"
import Addaddress from "../pages/admin/address/Addaddress"
import Showaddress from "../pages/admin/address/Showaddress"
import Showmessage  from "../pages/admin/allmessage/Showmessage";
import Addmessage from "../pages/admin/allmessage/Addmessage";
import Revisemessage from "../pages/admin/allmessage/Revisemessage";
export const mainRoutes = [
    {
        path:"/login",
        componet:Login
    },
    {
        path:"/404",
        componet:PageNotFound
    }
]
export const adminRoutes = [
    {
        path:"/admin/level",
        componet:Showlevel,//todo 点开首页是哪个页面
        exact:true,
        isShow:true,
        title:"等级管理",
        icon:"shop"
    },
    {
        path:"/admin/level/showlevel",
        componet:Showlevel,
        title:"等级展示",
        isShow:false
    },
    {
        path:"/admin/level/addlevel",
        componet:Addlevel,
        isShow:false,
        icon:"area-chart"
    },
    {
        path:"/admin/address",
        componet:Showaddress,
        exact:true,
        isShow:true,
        title:"地址管理",

    },
    {
        path:"/admin/address/showaddress",
        componet:Showaddress,
        isShow:false,
        title:"地址展示"
    },
    {
        path:"/admin/address/addaddress",
        componet:Addaddress,
        isShow:false,
        title:"地址添加"
    },
    {
        path:"/admin/message",
        componet:Showmessage,
        isShow:true,
        exact:true,
        title:"用户管理"
    },
    {
        path:"/admin/message/showmessage",
        componet:Showmessage,
        isShow:false,
        title:"用户展示"
    },
    {
        path:"/admin/message/addmessage",
        componet:Addmessage,
        isShow:false,
        title:"用户添加"
    },
    {
        path:"/admin/message/revisemessage",
        componet:Revisemessage,
        isShow:false,
        title:"信息修改",
    }
    
]