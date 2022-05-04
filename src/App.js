import {Route, Routes,} from 'react-router-dom'
import Men from './Components/Men';
import Women from './Components/Women';
import Error from './Components/Error';
import { Login } from './Components/Login';
import { SignUp } from './Components/Signup';
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Men/>}/>
      <Route exact path='/women' element={<Women/>}/>
      <Route element={<Error/>}/>
      <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} /> 
    </Routes>
      {/* <Men/>
      <Women/> */}
    </>
  );
}

export default App;
