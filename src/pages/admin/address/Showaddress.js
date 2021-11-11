
import React,{ useEffect,useState} from 'react'
import {Card ,Table,Button, Popconfirm}from "antd"
import {showaddress ,deladdress} from "../../../services/address"
function Showaddress(props) {
    const [dataSource,setDataSource]=useState([])
    useEffect(()=>{
        showaddress().then(res=>{
            setDataSource(res.data.data);
        }).catch(error=>{
            console.log("数据获取失败"+error)
        })
    })//todo useEffect hook钩子，相当于无状态组件中的几个生命周期的总和，没变化一次就会自动更新
  const  columns = [
      {
        title:"序号",
        key:"id",
        with:80,
        align:"center",
        //添加序号
        render:(tex,record,index)=>{
            return index+1
        }
    },{
        title:"地址",
        dataIndex:"addressname"
    },{
        title:"地址id",
        dataIndex:"addressid"
    },{
        title:"经度",
        dataIndex:"longitude",
    },{
        title:"纬度",
        dataIndex:"latitude"
    },{
        title:"操作",
        render:(render,record,index)=>{
            return(
                //! 必须用一个div进行包裹
                <div>
                <Popconfirm 
                title="确定删除吗？" 
                onCancel={()=>console.log("用户取消删除")}//! 一定要用方括号包裹
                onConfirm={()=>{
                    deladdress({addressid:record.addressid}).then((res)=>{
                    }).catch(()=>{
                        console.log("删除失败");
                    })
                }}>
                <Button type="danger" style={{margin:"0 1rem"}}>删除</Button>
                </Popconfirm>
                </div>
            )
        }
    }]; 
    return (
        <div>
        <Card title="地址列表"
        extra={
            <Button type="primary" size="small" onClick={()=>props.history.push("/admin/address/addaddress")}>新增</Button>
        }
        >
            <Table rowKey="id" columns={columns} bordered dataSource={dataSource}/>
        </Card>
        </div>
    )
}

export default Showaddress
