import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Component/Login/login';
import Signup from './Component/Signup/signup';
import NavScrollExample from './Component/Navbar/navbar';


function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<NavScrollExample />}/>
      </Routes>
    </Router>
   </> 
  );
}

export default App;
