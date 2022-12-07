import './App.css';
import Header from './components/Header';
import Tindercards from './components/Tindercards';
import SwipeButtons from './components/SwipeButtons';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import UploadPics from './components/UploadPics';
import {BrowserRouter  , Routes , Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
     
      <BrowserRouter>
      <Header/>
       <Routes>
       
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
          {/* <Route  element={<PrivateComponent/>}> */}
            <Route path='/tindercard' element={<Tindercards/>}/>
            <Route path='/UploadPics' element={<UploadPics/>}/>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
      
      
      
    
    </div>
  );
}

export default App;
