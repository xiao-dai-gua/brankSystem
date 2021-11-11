import React from 'react'
import { Layout, Menu, message } from 'antd';
import { adminRoutes } from '../../routes/index';
import { withRouter } from 'react-router';
import {  Dropdown,Avatar} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { clearToken } from '../../utils/auth';
// const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//todo 过滤一下不用显示的
const route  = adminRoutes.filter(route =>route.isShow)
function Index(props) {
  const menu = (
    <Menu onClick={(p)=>{
      //!如果退出直接跳转到登录页面
      if(p.key=="quit")
      {
        clearToken();//todo 清空数据
        props.history.push('/login')
      }
      else{
        message.info(p.key);
      }
    }}>
      <Menu.Item key="notice">
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          通知管理
        </a>
      </Menu.Item>
      <Menu.Item key="set">
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          设置
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="quit">
        退出
      </Menu.Item>
    </Menu>
  );
    return (
    <Layout>
    <Header className="header" style={{background:"pink"}}>
      <div className="logo">
        <Dropdown overlay={menu}>
           <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar>U</Avatar>超级管理员 <DownOutlined />
            </a>
         </Dropdown>
      </div>

    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
        {route.map(route=>{
            return (
            <Menu.Item 
            key={route.path}
            onClick={p=>props.history.push(p.key)}
            >
                {/* <Icon type={route.icon}/>  */}
                {route.title}
                </Menu.Item>)
        })
        }
        {/** todo写每个语句一定要加上大括号 */}
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
    )
}

export default withRouter(Index)
//todo 在组件中使用路由可以利用这个库不然有错
