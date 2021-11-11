import React,{ useEffect,useState} from 'react'
import {Card ,Table,Button, Popconfirm,Select,Form, message}from "antd"
import {delmessage, showmessage,searchaddressid} from "../../../services/allmessage"
import { showaddress } from '../../../services/address'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
function List(props) {
    const [dataSource,setDataSource]=useState([])
    //!展示数据
    useEffect(()=>{
        showmessage().then(res=>{
             setDataSource(res.data.data)
            
        }).catch(error=>{
            console.log("数据获取失败")
        })
    })
    //! 获取地址信息
    const [address,setaddress] = useState([]);
    showaddress().then(res=>{
      setaddress(res.data.data)
    }).catch(error=>{
      console.log(error)
    })
    //!查询信息
    const onFinish = (value)=>{
        console.log(value);
        searchaddressid(value).then(res=>{
            setDataSource(res.data.data)//todo 成功之后显示出查询序列
        }).catch(error=>{
            console.log(error);
        })
    }
   //!重置信息
   const reset  = ()=>{
    showmessage().then(res=>{
        setDataSource(res.data.data)
       
   }).catch(error=>{
       console.log("数据获取失败")
   }) 
   }
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
        title:"姓名",
        dataIndex:"jrname"
    },{
        title:"信息id",
        dataIndex:"jrid"
    },{
        title:"电话号码",
        dataIndex:"jrtel"//微信二维码图片
    },{
        title:"等级名称",
        dataIndex:"levelname"
    },{
        title:"地址名称",
        dataIndex:"addressname"
    },{
        title:"操作",
        render:(render,record,index)=>{
            return(
                //! 必须用一个div进行包裹
                <div>
                <Button type="primary" onClick={()=>{
                    //! 页面间传递参数
                    let path = {
                        pathname:"/admin/message/revisemessage",
                        query:record
                    }
                    props.history.push(path)
                }}>修改</Button>
                <Popconfirm 
                title="确定删除吗？" 
                onCancel={()=>console.log("用户取消删除")}//! 一定要用方括号包裹
                onConfirm={()=>
                    delmessage({id:record.jrid}).then(res=>{
                        console.log(res);
                    }).catch(error=>{
                        console.log("删除失败")
                    })
                }>
                <Button type="danger" style={{margin:"0 1rem"}}>删除</Button>
                </Popconfirm>
                </div>
            )
        }
    }];
    return (
        <Card title="信息列表"
        extra={
            <div className="form">
                <Button type="primary" size="small" onClick={()=>props.history.push("/admin/message/addmessage")}>新增</Button>
            </div>
        }
        >
             {/*  地址选择输入框 */}
             <Form onFinish={onFinish} {...layout}>
                <Form.Item label="地址选择" name="addressid" style={{width:"400px"}}>
                    <Select>
                    {
                        address.map((address)=>{
                        return (<Select.Option key= {address.addressid} value={address.addressid}>{address.addressname}</Select.Option>)
                        })
                    }
                    </Select>
                    <Form.Item >
                    <Button type="primary" size="small" onClick={()=>{message.success("查询成功")}} style={{margin:"0px 50px"}}>查询</Button>
                    <Button type="primary" size="small" onClick={reset}>重置</Button>
                    </Form.Item>
                </Form.Item>
            </Form>
            <Table rowKey="id" columns={columns} bordered dataSource={dataSource}/>
        </Card>
    )
}

export default List
