import './App.css';
import SignInSide from './components/login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Facepage from './components/pages/facepage'
import Signup from './components/signup'
import Dashboard from './components/pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      {/* <SignInSide/> */}
   
      <Routes>
       <Route path="/" element={<Facepage/>}/>
        <Route path="/login" element={<SignInSide/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
