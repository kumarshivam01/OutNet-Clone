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

import Cart from './Components/Cart';
import Product from './Components/Product';
import { Login } from './Components/Login';
import { SignUp } from './Components/Signup';
import MiniSkirtDetails from './Components/MiniSkirtDetails';
import { DashBoard } from './Components/DashBoard';
import { Order } from './Components/OrderCheck';
import Footer from './Components/Footer';
import AliceOlivaProduct from './Components/AliceOlivaProduct'
import ValentinoProduct from './Components/ValentinoProduct'
import SandalProduct from './Components/SandalProduct'
import HelmetProduct from './Components/HelmetProduct'
import MensJacketProduct from './Components/MensJacketProduct'
import MenShirtsProduct from './Components/MenShirtsProduct'
import MenPantsProduct from './Components/MenPantsProduct'

import GirlsBlazerProduct from './Components/GirlsBlazerProduct';
// import { NavBar } from './components/NavBar';

// import { Payment } from '@mui/icons-material';
import { PaymentWay } from './Components/PaymentWay';

// import { NavBar } from './Components/NavBar';

// import ProductDisplay from './Components/Product_display';
function App() {
  // const { isAuthenticated } = useSelector((state) => state.login)
  return (
  
    <>
    
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/products/midi-skirts-clothes/:id' element={<MiniSkirtDetails/>}/>
        <Route exact path='/products/Dolce-gabbana/:id' element={<Product/>}/>
        <Route exact path='/products/Alice+Olivia-clothes/:id' element={<AliceOlivaProduct/>}/>
        <Route exact path='/product/Valentino/:id' element={<ValentinoProduct/>}/>
        <Route exact path='/product/sandal/:id' element={<SandalProduct/>}/>
        <Route exact path='/product/helmet/:id' element={<HelmetProduct/>}/>
        <Route exact path='/products/mens-jacket/:id' element={<MensJacketProduct/>}/>
        <Route exact path='/products/men-t-shirts-clothes/:id' element={<MenShirtsProduct/>}/>
        <Route exact path='/products/men-pants-clothes/:id' element={<MenPantsProduct/>}/>
        <Route exact path='/product/women-blazers/:id' element={<GirlsBlazerProduct/>}/>
        {/* <NavBar/> */}
        <Route exact path='/men' element={<Men />} />
        <Route exact path='/cart' element={<Cart />} />
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
        <Route exact path='/footer' element={<Footer />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} /> 
        <Route path='/dashboard' element={<DashBoard/>} /> 
        <Route path='/orders' element={<Order/>} /> 
        <Route path='/payments' element={<PaymentWay/>} /> 

        <Route element={<Error />} />
        
        
      </Routes>
    </>
  );
}

export default App;
