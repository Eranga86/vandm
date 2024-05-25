import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './pages/Catogory';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';





function App() {
  return (

    
    <div className="App">
       <Router>
            <Routes>
               <Route path="/" element={<Home/>} />
                <Route path="/refund-policy" element={<RefundPolicy/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
                {/* Add other routes here */}
            </Routes>
        </Router>
      
      

    </div>
  );
}

export default App;

