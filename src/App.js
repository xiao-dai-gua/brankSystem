import './App.css';
import {adminRoutes} from "./routes/index"
import { Switch,Route, Redirect } from 'react-router-dom';
import Frame from'./componet/Frame/Index';
import {isLogined} from "./utils/auth"
function App() {
   return isLogined()?(
    //todo 直接将div换成frame 然后去修改antd传入的内容然后在引用它
    <Frame>
      <Switch>
        {
          adminRoutes.map(route=>{
            return(
              <Route key={route.path} {...route}
              render={routeProps=>{
                //? 利用这个组件 将其中的值都传过去
                return <route.componet {...routeProps} />
              }}
              ></Route>
            )
          })
        }
      <Redirect to="/404"></Redirect>
      </Switch>
      </Frame>):
    (<Redirect to="/login"></Redirect>)
   
}

export default App;
