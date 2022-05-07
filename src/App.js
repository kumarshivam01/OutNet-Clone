import { Route, Routes, } from 'react-router-dom'
import Men from './Components/Men';
import Women from './Components/Women';
import Error from './Components/Error';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from './Components/LandingPage';
import MenCollection from './Components/MenCollection';
import WomenCollection from './Components/WomenCollection';
import Dolcegabbana from './Components/Dolcegabbana';
import HelmetLang from './Components/HelmetLang';
import MensShirts from './Components/MensShirts';
import MensJacket from './Components/MensJacket';
import AliceOlivia from './Components/AliceOlivia';
import Blazers from './Components/Blazers';
import Sandal from './Components/Sandal';
import MidiSkirts from './Components/MidiSkirts';
import { AboutUs } from './Components/Aboutus';
import Abcd from './Components/Abcd';
import Product from './Components/Product';
import { Login } from './Components/Login';
import { SignUp } from './Components/Signup';
import { DashBoard } from './Components/DashBoard';
// import { NavBar } from './components/NavBar';
// import ProductDisplay from './Components/Product_display';
function App() {
  // const { isAuthenticated } = useSelector((state) => state.login)
  return (

    <>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/products/:id' element={<Product/>}/>
        {/* <NavBar/> */}
        <Route exact path='/men' element={<Men />} />
        <Route exact path='/women' element={<Women />} />
        <Route exact path='/men/pant-clothes' element={<MenCollection/>}/>
        <Route exact path='/women/valantion-clothes' element={<WomenCollection/>}/>
        <Route exact path='/women/alice-olivia-clothes' element={<AliceOlivia/>}/>
        <Route exact path='/women/blazers-clothes' element={<Blazers/>}/>
        <Route exact path='/women/sandal-clothes' element={<Sandal/>}/>
        <Route exact path='/women/midi-skirts-clothes' element={<MidiSkirts/>}/>
        <Route exact path='/men/dolce-gabbana-clothes' element={<Dolcegabbana/>}/>
        <Route exact path='/men/helmet-Lang-clothes' element={<HelmetLang/>}/>
        <Route exact path='/men/mens-shirts-clothes' element={<MensShirts/>}/>
        <Route exact path='/men/mens-jacket-clothes' element={<MensJacket/>}/>
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} /> 
        <Route path='/dashboard' element={<DashBoard/>} /> 

        <Route element={<Error />} />
        
        
      </Routes>
    </>
  );
}

export default App;
