import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route, Switch,Redirect} from "react-router-dom";
import {mainRoutes,adminRoutes} from "./routes/index";
import  "antd/dist/antd.css";
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      {//todo 当访问admin的时候用app组件进行渲染
      }
    <Route path="/admin" render={routeProps=><App {...routeProps}/>}></Route> 
    {
        mainRoutes.map(route=>{
          {
            //?结构赋值用不了
          }
          return <Route key={route.path} path={route.path} component={route.componet} ></Route>
        })
    }
    {//! 当页面找不到的时候跳转到404页面
    }
    //todo 默认路由跳转页避免直接跳转到404
    <Redirect to={adminRoutes[0].path}></Redirect>
    <Redirect to="/404"></Redirect>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
