import React,{useState} from "react"
import { Form, Input, Button, message,Card,Select,Upload } from 'antd';
import { showaddress } from "../../../services/address";
import { showLevel } from "../../../services/level";
import { createmessage } from "../../../services/allmessage";
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 4 },
  };
  const tailLayout = {
    wrapperCol: { offset: 9, span: 4 },
  };
  //!添加所有数据
  const onFinish = (values)=>{
    //! 添加数据
    const uname = values.uname;
    const addressid = values.addressid;
    const levelid = values.levelid;
    const tel = values.tel;
    const tcoin = "";
    const weixin = "";
    createmessage({uname,addressid,levelid,tel,tcoin,weixin}).then(res=>{
    }).catch(error=>{
      console.log(error);
    })


  };
  const show = ()=>{
    message.success("保存成功")//todo 点击按钮之后弹出框显示
  }
 
function Addmessage(props) {
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
      console.log(error)
    })
   //!上传头像和微信二维码
   const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: '',
    },
  ]);
  //!上传图片
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
  };

  const onPreview = async file => {
    let src = file.url;
    console.log(file.utl);
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  }
  
    return (
        <div>
             <Card title="用户添加"
            extra={
                <Button type="primary" size="small" onClick={()=>props.history.push("/admin/message/showmessage")}>返回</Button>
            }>
             {/*输入框 */}
             <Form {...layout}  name="control-hooks" onFinish={onFinish}>
                <Form.Item name="uname" label="用户名称" rules={[{ required: true ,message: "请输入用户名称"}]}>
                  <Input />
                </Form.Item>
                <Form.Item name="tel" label="电话号码" rules={[{ required: true ,message: "请输入电话号码"}]}>
                  <Input />
                </Form.Item>
                <Form.Item label="地址选择" name="addressid">
                  <Select>
                  {
                      address.map((address)=>{
                        return (<Select.Option key= {address.addressid} value={address.addressid}>{address.addressname}</Select.Option>)
                      })
                    }
                  </Select>
                </Form.Item>
                <Form.Item label="等级选择" name="levelid">
                  <Select>
                  {
                      level.map((level)=>{
                        return (<Select.Option key= {level.jrid} value={level.jrid}>{level.levelname}</Select.Option>)
                      })
                    }
                  </Select>
                </Form.Item>
                {/* 上传头像 上传二维码 */}
                 
                  <Upload
                    action="http://47.92.82.13:4000/getMessageA"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 5 && '+ Upload'}
                  </Upload>
              
                    //! 点击添加
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

export default Addmessage

 
