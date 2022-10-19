import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from "react-router-dom";  
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from "./components/Login";
import Register from "./components/Register";
import Inicio from "./components/Inicio";
import TablaPeticiones from "./components/TablaPeticiones";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [userFirebase,setUserFirebase] = useState(false);
useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    if (user) {
      setUserFirebase(user)
    }else{
      setUserFirebase(null)
    }
  })
},[])
  return (
    <Router>
         <Routes>
            <Route index path="/login" element={<Login></Login>}  />
            <Route path="/register" element={<Register></Register>}  />
            <Route path="/inicio" element={<Inicio></Inicio>}  />
            <Route path="/peticiones" element={<TablaPeticiones></TablaPeticiones>}  />
         </Routes>
    </Router>
         
  );
}

export default App;
