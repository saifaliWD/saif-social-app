import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" index  element={<Login/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/register" element={<Register/>} />



    </Routes>
  </BrowserRouter>

  

  )
}

export default App;
