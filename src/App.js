import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Events from './pages/Events';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogForm from './pages/BlogForm';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/Events" element={<Events />} />
        <Route path="/Blog/:id" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/BlogForm" element={<BlogForm />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
