import React from "react";
import {Routes,Route,useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import AboutUsPage from '../../Pages/AboutUsPage/AboutUsPage';
import SignInPage from '../../Pages/SignInPage/SignInPage';
import SignUpPage from '../../Pages/SignUpPage/SignUpPage';
import HomePage from '../../Pages/HomePage/HomePage';
import AddItemPage from '../../Pages/AddItemPage/AddItemPage';
import FilterPage from '../../Pages/FilterPage/FilterPage';
import FaqPage from '../../Pages/FaqPage/FaqPage';

function AnimationProvider() {
    const location = useLocation()
    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<FilterPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
      </AnimatePresence>
    )
}

export default AnimationProvider