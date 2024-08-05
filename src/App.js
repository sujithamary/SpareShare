import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUp from './Components/LoginForm/SignUp';
import HomeSection from './Components/Sections/HomeSection';
import DonationSection from './Components/Sections/DonationSection';
import MissionSection from './Components/Sections/MissionSection';
import AboutSection from './Components/Sections/AboutSection';
import ContactSection from './Components/Sections/ContactSection';
import Footer from './Components/Sections/Footer';
import FeedbackForm from './Components/FeedBack/FeedBack';
import Payment from './Components/Sections/Payment';
import LandingPage from './Components/LandingPage/LandingPage';
import Cloth from './Components/DonateNow/Cloth';
import ThankYouPage from './Components/DonateNow/Thankyou';
import Food from './Components/DonateNow/Food';
import Footwear from './Components/DonateNow/Footwear';
import Gadgets from './Components/DonateNow/Gadgets';
import Stationery from './Components/DonateNow/Stationery';
import Fund from './Components/DonateNow/Fund';
import DonationForm from './Components/DonateNow/DonationForm';
import AboutUs from './Components/Sections/AboutUs';
import AdminNavbar from './Components/Admin/Components/AdminNavbar/AdminNavbar';
import AdminHome from './Components/Admin/Components/AdminHome/AdminHome';
import ManageProducts from './Components/Admin/Components/ManageProducts/ManageProducts';
import ManageUsers from './Components/Admin/Components/ManageUsers/ManageUsers';
import AdminFooter from './Components/Admin/Components/AdminFooter/AdminFooter';
import AdminLanding from './Components/Admin/Components/AdminLandingPage/AdminLanding';
import AdminMenu from './Components/Admin/Components/AdminMenu/AdminMenu';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage isLoggedIn={isLoggedIn} username={username} />} 
          />
          <Route 
            path="/LoginForm" 
            element={<LoginForm onLogin={handleLogin} />} 
          />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/home" element={<HomeSection />} />
          <Route path="/donation" element={<DonationSection />} />
          <Route path="/mission" element={<MissionSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/food" element={<Food />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/gadgets" element={<Gadgets />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/donation-form" element={<DonationForm />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/aNavbar" element={<AdminNavbar/>} />
          <Route path='/admin/*' element={<AdminLanding/>} >
            <Route path="aHome" element={<AdminHome/>} />
            <Route path="aProducts" element={<ManageProducts/>} />
            <Route path="aUsers" element={<ManageUsers/>} />
          </Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
