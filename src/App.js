import { Route, Routes, } from 'react-router-dom'
import Men from './Components/Men';
import Women from './Components/Women';
import Error from './Components/Error';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPage from './Components/LandingPage';
import MenCollection from './Components/MenCollection';
import WomenCollection from './Components/WomenCollection';
// import ProductDisplay from './Components/Product_display';
function App() {
  // const { isAuthenticated } = useSelector((state) => state.login)
  return (

    <>
      <Routes>
        <Route exact path='/men' element={<Men />} />
        <Route exact path='/women' element={<Women />} />
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/men/clothing' element={<MenCollection/>}/>
        <Route exact path='/women/clothing' element={<WomenCollection/>}/>
        <Route element={<Error />} />
        
        
      </Routes>
    </>
  );
}

export default App;
