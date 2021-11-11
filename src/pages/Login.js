import React from 'react'
import { Form, Input, Button, Checkbox,Card} from 'antd';
import "./Login.css"
import { setToken } from '../utils/auth';
// import {loginApi}from'../services/auth'
 

function Login(props) {
  const onFinish = (values) => {
    // loginApi({
    //   username:values.username,
    //   password:values.password
    // }).then(res=>{
    //   console.log(res)
    //   if(res.code === "success"){
    //   setTokey(res.token)
    //   props.history.push("/admin/products")}
    //   else{
    //     message.info("res.message")
    //   }

   
    setToken(values.username);
    props.history.push("/admin/message")
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
    return (
        <Card title="登录页面" className="login-form">
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输出用户名' }]}
      >
        <Input defaultValue="admin"/>
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password defaultValue="123456"/> //todo 添加默认值
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
        </Card>
    )
}
//! 导出表单元素
export default Login
