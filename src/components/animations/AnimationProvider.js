import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from "react-redux";
import _ from 'lodash';
import AboutUsPage from '../../Pages/AboutUsPage/AboutUsPage';
import SignInPage from '../../Pages/SignInPage/SignInPage';
import SignUpPage from '../../Pages/SignUpPage/SignUpPage';
import HomePage from '../../Pages/HomePage/HomePage';
import AddItemPage from '../../Pages/AddItemPage/AddItemPage';
import FilterPage from '../../Pages/FilterPage/FilterPage';
import FaqPage from '../../Pages/FaqPage/FaqPage';
import ContactUs from '../../Pages/ContactUsPage/ContactUs'
import SignedInUsersHomePage from "../../Pages/SignedInUsersHomePage/SignedInUsersHomePage";
import { user } from "../../features/slices/user";
import ProfilePage from '../../Pages/ProfilePage/ProfilePage'

function AnimationProvider() {
  const location = useLocation()
  const userData = useSelector(user)
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {!_.isEmpty(userData) ? <Route path="/" element={<SignedInUsersHomePage />} /> : <Route path='/' element={<HomePage />} />}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<FilterPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimationProvider;
