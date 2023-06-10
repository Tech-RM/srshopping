import Home from './routes/home/home.comonents';
import {Route,Routes} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import AuthenticationRoute from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckoutPage from './routes/checkout/checkout.component';

const App=()=>{
  return(
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<AuthenticationRoute/>} />
        <Route path="checkout" element={<CheckoutPage/>} />
      </Route>
    </Routes>
  )
}

export default App;
