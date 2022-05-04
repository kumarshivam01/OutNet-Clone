import { Route, Routes, } from 'react-router-dom'
import Men from './Components/Men';
import Home from './Components/Home';
import { Login } from './Components/Login'
import { SignUp } from './Components/Signup'
import Women from './Components/Women';
import Error from './Components/Error';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
import LandingPage from './Components/LandingPage';
import Product_display from './Components/Product_display';
function App() {
  // const { isAuthenticated } = useSelector((state) => state.login)
  return (

    <>
      <Routes>
        <Route exact path='/men' element={<Men />} />
        <Route exact path='/women' element={<Women />} />
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/men/clothing' element={<Product_display/>}/>
        <Route element={<Error />} />
        
        {/* <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} /> */}
      </Routes>
    </>
  );
}

export default App;
