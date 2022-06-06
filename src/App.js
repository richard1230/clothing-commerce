import { Route,Routes,Outlet} from 'react-router-dom'
import Home from './routes/home/home.component';

const Navigation = () => { 
  return (
    <div>
      <div>
         <h1>Navigation page</h1>
      </div>
      <Outlet/>
    </div>
  )
}

const Shop = () => { 
  return (
    <h1>I am the shop page</h1>
  )
}
 function App() {

   return (
     <Routes>
     <Route path='/' element={<Navigation />} >
       <Route path='home'  element={<Home />} />
         <Route path='shop' element={<Shop />} />

       </Route>

     </Routes>
  );
}

// 这里是嵌套路由的写法:shop前面没有/,home前面也没有/,这两个是要嵌套在Navigation组件里面
//最外层是嵌套其他组件的,这里最外层为Navigation,配合Outlet,/home; /shop皆可以显示

export default App;
