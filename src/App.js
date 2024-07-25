import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Courses from './components/Courses';
import Blog from './components/Blog';
import Contact from './components/Contact';

import './App.css'; // Import your CSS
import Home from './components/Home';
import WebDevelopment from './components/WebDevelopment';
import CourseDetail from './components/CourseDetail';
import MobileAppDevelopment from './components/MobileAppDevelopment';
import HrManagement from './components/HrManagement';
import ContactUs from './components/contactUs';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
  
            <Route path="/webdevelopment" element={<WebDevelopment />} />
            <Route path="/coursedetail/:id" element={<CourseDetail />} />
            <Route path="/mobileApp" element={<MobileAppDevelopment />} />
            <Route path="/hrManagement" element={<HrManagement />} />
            {/* <Route path="/contactus" element={<ContactUs />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
