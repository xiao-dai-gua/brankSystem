import React,{useState} from 'react'//todo 生成模板的快捷键rfce
import { Form, Input, Button,Select, message } from 'antd';
import { showaddress } from "../../../services/address";
import { showLevel } from "../../../services/level";
import{updatamessage} from "../../../services/allmessage"

//! 修改用户信息
function Revisemessage(props) {

    //! 获取页面间传递的参数
    let data = props.location.query;
    //! 获取用户要修改的值
    const onFinish = (values) => {
        let id = props.location.query.jrid;
        let revisedata = {
            id,
            uname:values.uname,
            addressid:values.addressid,
            levelid:values.levelid,
            tel:values.tel
        }
        console.log(revisedata);
        updatamessage(revisedata).then(res=>{
            console.log("haha")
            console.log(res)
        }).catch(error=>{
            console.log("hehehe")
            console.log(error)
        })
    };
      //! 获取所有元素的地址信息
   const [address,setaddress] = useState([]);

   showaddress().then(res=>{
     setaddress(res.data.data)
   }).catch(error=>{
     console.log(error)
   })
    //todo 在hook中定义数值改变数值只能这么做
    //! 获取所有等级信息
    const [level,setlevel] = useState([]);

    showLevel().then(res=>{
        setlevel(res.data.data)
    }).catch(error=>{
        console.log(error);
    })
    return (
        <div>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            onFinish={onFinish}
        >
      <Form.Item
        label="用户名字"
        name="uname"
        rules={[{ required: true, message: '请输入你的名字' }]}
      >
        <Input defaultValue={data.jrname}/>
      </Form.Item>

      <Form.Item
        label="电话号码"
        name="tel"
        rules={[{ required: true, message: '请输入电话号码' }]}
      >
        <Input defaultValue={data.jrtel} />
      </Form.Item>
      <Form.Item label="地址选择" name="addressid" >
        <Select defaultValue={data.addressname}>
        {
            address.map((address)=>{
            return (<Select.Option key= {address.addressid} value={address.addressid}>{address.addressname}</Select.Option>)
            })
        }
        </Select>
    </Form.Item>
    <Form.Item label="等级选择" name="levelid">
        <Select defaultValue={data.levelname}>
        {
            level.map((level)=>{
            return (<Select.Option key= {level.jrid} value={level.jrid}>{level.levelname}</Select.Option>)
            })
        }
        </Select>
    </Form.Item>
     

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={()=>{message.success("提交成功")}} style={{margin:"0 20px"}}>
          提交
        </Button>
        <Button type="primary"  onClick={()=>{props.history.push("/admin/message/showmessage")}}>
        返回
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}


export default Revisemessage
