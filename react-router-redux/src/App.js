import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="article" element={<Blog/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="login" element={<Signin/>}/>
          <Route path="create-account" element={<Signup/>}/>
          <Route path="*" element={<NotFound/>}/>
          
        </Route>       
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
