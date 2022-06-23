import {  Route, Routes } from 'react-router-dom'

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';




function App() {  
  return (
    <Routes>
    <Route path='/' element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
  </Route>
    </Routes>
  );
}

// 这里是嵌套路由的写法:shop前面没有/,这是要嵌套在Navigation组件里面
//最外层是嵌套其他组件的,这里最外层为Navigation,配合Outlet, /shop皆可以显示
// <Route index  element={<Home />} />          
// <Route path="/home"  element={<Home />} />   //这行和上面这行效果等价,只不过原来 /home显示的效果,现在 / 即可



export default App;
