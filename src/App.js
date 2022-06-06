import { Route,Routes} from 'react-router-dom'
import Home from './routes/home/home.component';


const Shop = () => { 
  return (
    <h1>I am the shop page</h1>
  )
}
 function App() {

   return (
     <Routes>
       <Route path='/home' element={<Home />} >
       <Route path='shop'  element={<Shop/>}/>

       </Route>

     </Routes>
  );
}

export default App;
