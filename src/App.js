import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Newsletter from './components/Newsletter';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        {/* Home page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <ProductGrid />
            <About />
            <Contact />
            <Testimonials />
            <Blog />
            <Newsletter />
          </>
        } />
        
        {/* Individual pages if needed */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/Newsletter" element={<Newsletter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
