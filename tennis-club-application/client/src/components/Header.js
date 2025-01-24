import React from 'react';
//import './Header.css'

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
              <a href="/announcements" class="nav__link">Announce</a>
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