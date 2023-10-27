import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogForm from './pages/BlogForm';
import AllBlogs from './pages/AllBlogs';
import LogIn from './pages/LogIn';
import Table from './pages/Table';
import './App.css'
import Splash from './pages/Splash';


function App() {

 
  return (
    <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog/:id" element={<Blog />} />
        <Route path="/AllBlogs" element={<AllBlogs />} />
        <Route path="/About" element={<About />} />
        <Route path="/BlogForm" element={<BlogForm />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
