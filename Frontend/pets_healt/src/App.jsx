import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./screens/Home/Home";
import Error404 from "./screens/Error/Error404";
import Home from "./screens/Grillas/Grilla_home";
import Contact from "./screens/Grillas/Grilla_contact";
import Grilla_login from "./screens/Grillas/Grilla_login";
import Home_user from "./screens/Administration/Home_user";
import Create_user from "./screens/Administration/Create_user";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error404/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Grilla_login/>} />
        <Route path="/Home_user" element={<Home_user/>} />
        <Route path="/Create_user" element={<Create_user/>} />

      </Routes>
        
      </BrowserRouter>
    </>
  );
}
export default App;