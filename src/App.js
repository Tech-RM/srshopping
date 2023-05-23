import Home from './routes/home/home.comonents';
import {Route,Routes} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import AuthenticationRoute from './routes/authentication/authentication.component';

const Shop=()=>{
  return(
    <div>
      <h3>Shopping</h3>
    </div>
  );
}

const App=()=>{
  return(
    <Routes>
      <Route path='/' element={<Navigation/>} >
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<AuthenticationRoute/>} />
      </Route>
    </Routes>
  )
}

export default App;
