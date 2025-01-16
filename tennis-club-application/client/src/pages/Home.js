import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

import { Route, Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import Header from "../components/Header";
import FAQItem from '../components/FAQItem';

import '../styles/Home.css';
import Footer from "../components/Footer";

const Home = () => {

  const navigate = useNavigate(); // Initialize useHistory

  const handleButtonClick = (path) => {
    navigate('/header'); // Navigate to the specified path when the button is clicked
  };

  const faqData = [
    {
      question: "What type of shoes are we allowed to wear on the courts?",
      answer:
        "You are allowed to wear tennis shoes or sports shoes with non-marking soles on the courts. Sandals, flip-flops, and shoes with dark soles are not allowed.",
    },
    {
      question: "What are the court reservation timings?",
      answer:
        "Courts are available for reservation from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 9:00 PM on weekends.",
    },
    // Add more FAQ items as needed
  ];

  console.log(faqData);

  return (
    <div>
      <Header />
      <main class = "main__home">
        <section class ="first__section">
        <h1 class = "heading">Welcome to Barton Creek Tennis</h1>
        <div class = "profile-area">
            <div class = "container">
              <div class = "row">
                <div class = "col-md-4">
                  <div class="home-card">
                    {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
                    {/* <div class = "img2"><img src = "monte_williams.jpg" alt =""></img></div> */}
                    <div class = "main-text">
                      <h2>Lessons</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button"><button type="button" class="btn btn-dark">Book Now</button></div>
                  </div>
                </div>
                
                <div class = "col-md-4">
                <div class="home-card">
                    {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
                    {/* <div class = "img2"><img src = "jorge_margiotta.jpg" alt =""></img></div> */}
                    <div class = "main-text">
                      <h2>Clinics</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button"><button type="button" class="btn btn-dark">Sign Up</button></div>
                  </div>
                  
                </div>
                
                <div class = "col-md-4">
                <div class="home-card">
                    {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
                    {/* <div class = "img2"><img src = "chandler_harris.jpg" alt =""></img></div> */}
                    <div class = "main-text">
                      <h2>Junior Tennis Academy</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button">
                      <button type="button" class="btn btn-dark">
                        <a href="/kids">Register</a>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              <br></br>
              <div class = "row">
                <div class = "col-md-4">
                  <div class="home-card">
                    {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
                    {/* <div class = "img2"><img src = "monte_williams.jpg" alt =""></img></div> */}
                    <div class = "main-text">
                      <h2>Rentals</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button"><button type="button" class="btn btn-dark">Rent Now</button></div>
                  </div>
                </div>
                
                <div class = "col-md-4">
                <div class="home-card">
                    {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
                    {/* <div class = "img2"><img src = "jorge_margiotta.jpg" alt =""></img></div> */}
                    <div class = "main-text">
                      <h2>Packages</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button"><button type="button" class="btn btn-dark">Sign Up</button></div>
                  </div>
                  
                </div>
                
                <div class = "col-md-4">
                <div class="home-card">
                    {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
                    {/* <div class = "img2"><img src = "chandler_harris.jpg" alt =""></img></div> */}
                    <div class = "main-text">
                      <h2>Stringing</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button">
                      <button type="button" class="btn btn-dark stretched-link">
                        <a href="/kids">Submit A Request</a>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section class ="faq__section">
          <h1 className="title">FAQ'S</h1>
          <div className="questions-container">
            {/* Use map to render FAQ items */}
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      {/* <section>
        <h1 class = "title">FAQ'S</h1>
        <div class = "questions-container">
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fas fa-chevron-down d-arrow"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
          <div class = "question">
            <button>
              <span>What type of shoes are we allowed to wear on the courts?</span>
              <span><i class="fa-regular fa-chevron-down"></i></span>
            </button>
            <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
          </div>
        </div>
      </section> */}

      
      </main>
      <Footer />
    </div>
    
  );
};

export default Home;
