import { Form, Input, Button, message,Card } from 'antd';
import { addaddress} from '../../../services/address';
import React from 'react'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 4 },
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 4 },
};
const onFinish = (values)=>{
  //! 添加数据
  console.log(values);
  addaddress(values).then((res)=>{
    })
};
const show = ()=>{
      message.success("保存成功")//todo 点击按钮之后弹出框显示
    }

function Addaddress(props) {
    return (
        <div>
             <Card title="地址添加"
            extra={
                <Button type="primary" size="small" onClick={()=>props.history.push("/admin/address/showaddress")}>返回</Button>
            }>
            
             <Form {...layout}  name="control-hooks" onFinish={onFinish}>
                <Form.Item name="address" label="地址名称" rules={[{ required: true ,message: "请输入地址名称"}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="longitude" label="地址经度" rules={[{ required: true ,message: "请输入地址精度"}]}>
                    <Input />
                </Form.Item>
                <Form.Item name="latitude" label="地址纬度" rules={[{ required: true ,message: "请输入地址纬度"}]}>
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={show}>
                    保存
                    </Button>
                </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Addaddress

