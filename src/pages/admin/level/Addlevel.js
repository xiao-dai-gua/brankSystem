import { Form, Input, Button, message, Card } from 'antd';
import {React,useEffect,useState}from 'react'
import { addLevel} from '../../../services/level';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 4 },
};
const tailLayout = {
  wrapperCol: { offset: 9, span: 4 },
};
const onFinish = (values)=>{
  //! 添加数据
  addLevel(values).then((res)=>{
    })
};
const show = ()=>{
      message.success("保存成功")//todo 点击按钮之后弹出框显示
    }
function Addlevel(props) {
     
    return (
        <div>
            <Card title="等级添加"
            extra={
                <Button type="primary" size="small" onClick={()=>props.history.push("/admin/level/showlevel")}>返回</Button>
            }>

             <Form {...layout}  name="control-hooks" onFinish={onFinish}>
                <Form.Item name="levelname" label="等级名称" rules={[{ required: true ,message: "请输入等级名称"}]}>
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

export default Addlevel
