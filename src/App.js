import Home from './routes/home/home.comonents';
import {Route,Routes} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import AuthenticationRoute from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckoutPage from './routes/checkout/checkout.component';
import { createUserDocumentFromUserAuth, onAuthStateChangedListner } from './utility/firebase/firebase.utility';
import { useEffect } from 'react';
import {setCurrentUser} from './store/user/user.action';
import { useDispatch } from 'react-redux';

const App=()=>{
  const dispatch=useDispatch();
  const UserUpdateCallback=(user)=>{
    if(user){
        createUserDocumentFromUserAuth(user);
    }
    dispatch(setCurrentUser(user));
    }

useEffect(()=>{
const unsubscribe=onAuthStateChangedListner(UserUpdateCallback);
return unsubscribe});

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
