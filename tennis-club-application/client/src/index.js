import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import LessonsPage from './pages/Lessons';
import ClinicsPage from './pages/Clinics';
import KidsPage from './pages/Kids';
import RentalsPage from './pages/Rentals';
import PackagesPage from './pages/Packages';
import StringingPage from './pages/Stringing';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import Lessons_BookingPage from './pages/Lessons_Booking';
import Kids_RegistrationPage from './pages/Kids_RegistrationPage';

import {
  createBrowserRouter, 
  RouterProvider,
  Route,
} from "react-router-dom";
import AnnouncementsPage from './pages/Announcements';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "lessons",
    element: <LessonsPage />
  },
  {
    path: "clinics",
    element: <ClinicsPage />
  },
  {
    path: "kids",
    element: <KidsPage />
  },
  {
    path: "rentals",
    element: <RentalsPage />
  },
  {
    path: "packages",
    element: <PackagesPage />
  },
  {
    path: "stringing",
    element: <StringingPage />
  },
  {
    path: "contact",
    element: <ContactPage />
  },
  {
    path: "lessons_booking",
    element: <Lessons_BookingPage />
  },
  {
    path: "announcements",
    element: <AnnouncementsPage />
  },
  {
    path: "kids_registration",
    element: <Kids_RegistrationPage />
  },
  {
    path: "about",
    element: <AboutPage />
  },
]);

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
