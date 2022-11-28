import { Navigate, useRoutes } from 'react-router-dom';

import { useSelector } from "react-redux";
import _ from 'lodash';
import { user } from "../features/slices/user";

// Pages
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage';
import SignInPage from '../Pages/SignInPage/SignInPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';
import HomePage from '../Pages/HomePage/HomePage';
import AddItemPage from '../Pages/AddItemPage/AddItemPage';
import FilterPage from '../Pages/FilterPage/FilterPage';
import FaqPage from '../Pages/FaqPage/FaqPage';
import ContactUs from '../Pages/ContactUsPage/ContactUs'
import ProfilePage from '../Pages/ProfilePage/ProfilePage'
import ItemDetailsPage from '../Pages/ItemDetailsPage/ItemDetailsPage';
import SignedInUsersHomePage from "../Pages/SignedInUsersHomePage/SignedInUsersHomePage";
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage'

export default function Router() {
    const userData = useSelector(user)

    return useRoutes([
        { path: '/', element: _.isEmpty(userData) ? <HomePage /> : <SignedInUsersHomePage /> },
        { path: '/signin', element: <SignInPage /> },
        { path: '/signup', element: <SignUpPage /> },
        { path: '/products', element: <FilterPage /> },
        { path: '/product/:id', element: <ItemDetailsPage /> },
        { path: '/about', element: <AboutUsPage /> },
        { path: '/faq', element: <FaqPage /> },
        { path: '/add-item', element: <AddItemPage /> },
        { path: '/contact-us', element: <ContactUs /> },
        { path: '/profile-page', element: _.isEmpty(userData) ? <NotFoundPage /> : <ProfilePage /> },
        { path: "404", element: <NotFoundPage /> },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}