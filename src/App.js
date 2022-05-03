import {Route, Routes,} from 'react-router-dom'
import Men from './Components/Men';
import Women from './Components/Women';
import Error from './Components/Error';
function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Men/>}/>
      <Route exact path='/women' element={<Women/>}/>
      <Route element={<Error/>}/>
    </Routes>
      {/* <Men/>
      <Women/> */}
    </>
  );
}

export default App;
