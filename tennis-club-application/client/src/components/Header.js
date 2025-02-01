import React from 'react';
//import './Header.css'
// import './header.css';

function Header() {
  const headingStyle = {
    fontFamily: 'Gradianto, serif',
    fontSize: 20,
  };
  return (
    <header class = "header">
      <div class = "header__content">
        <img src="/BC_LOGO.gif" href = "/" alt="bc__logo" class = "bc_logo" width={102} height={58}/>
        <a href = "/" class ="logo">Barton Creek Tennis</a>

        <nav class="nav">
          <ul class="nav__list">
            <li class = "nav__item">
              <a href="/" class="nav__link">Home</a>
            </li>
            {/* <li class = "nav__item">
              <a href="/lessons" class="nav__link">Lessons</a>
            </li> */}
            <li class = "nav__item">
              <div class="dropdown">
                <button class="dropbtn">Services&nbsp;
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="/lessons">Lessons</a>
                  <a href="/clinics">Clinics</a>
                  <a href="/kids">Kids</a>
                  <a href="/rentals">Rentals</a>
                  <a href="/packages">Packages</a>
                  <a href="/stringing">Stringing</a>
                </div>
              </div> 
            </li>
            {/* <li class = "nav__item">
              <a href="/clinics" class="nav__link">Clinics</a>
            </li>
            <li class = "nav__item">
              <a href="/kids" class="nav__link">Kids</a>
            </li>
            <li class = "nav__item">
              <a href="/rentals" class="nav__link">Rentals</a>
            </li>
            <li class = "nav__item">
              <a href="/packages" class="nav__link">Packages</a>
            </li>
            <li class = "nav__item">
              <a href="/stringing" class="nav__link">Stringing</a>
            </li> */}
            <li class = "nav__item">
              <a href="/about" class="nav__link">About</a>
            </li>
            <li class = "nav__item">
              <a href="/announcements" class="nav__link">Announcements</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // <header>
    //   <div className="logo">
    //     <img src="./bartoncreeklogo2.png" alt="Logo" />
    //   </div>
    //   <div className="banner" style={headingStyle}>
    //     <h1>Welcome to Barton Creek Tennis!</h1>
    //     <h4>Please select a service</h4>
    //   </div>
    // </header>
  );
}

export default Header;


// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { scrollY } = useScroll();

//   useEffect(() => {
//     const updateHeader = () => {
//       const scrolled = window.scrollY > 50;
//       setIsScrolled(scrolled);
//     };

//     window.addEventListener('scroll', updateHeader);
//     return () => window.removeEventListener('scroll', updateHeader);
//   }, []);

//   return (
//     <motion.header
//       className={`header fixed w-full transition-all duration-300 ${
//         isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
//       }`}
//       style={{
//         zIndex: 1000,
//       }}
//     >
//       <div className="header__content">
//         <img src="/BC_LOGO.gif" href="/" alt="bc__logo" className="bc_logo w-[102px] h-[58px]" />
//         <a href="/" className={`logo ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
//           Barton Creek Tennis
//         </a>

//         <nav className="nav">
//           <ul className="nav__list">
//             <li className="nav__item">
//               <a href="/" className={`nav__link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
//                 Home
//               </a>
//             </li>
//             <li className="nav__item">
//               <div className="dropdown">
//                 <button className={`dropbtn ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
//                   Services&nbsp;
//                   <i className="fa fa-caret-down"></i>
//                 </button>
//                 <div className="dropdown-content">
//                   <a href="/lessons">Lessons</a>
//                   <a href="/clinics">Clinics</a>
//                   <a href="/kids">Kids</a>
//                   <a href="/rentals">Rentals</a>
//                   <a href="/packages">Packages</a>
//                   <a href="/stringing">Stringing</a>
//                 </div>
//               </div>
//             </li>
//             <li className="nav__item">
//               <a href="/about" className={`nav__link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
//                 About
//               </a>
//             </li>
//             <li className="nav__item">
//               <a href="/announcements" className={`nav__link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
//                 Announcements
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </motion.header>
//   );
// };

// export default Header;