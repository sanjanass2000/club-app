import React, { useState, useEffect } from "react"
import Header from '../components/Header';
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Footer from "../components/Footer";

function LessonsPage() {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    // Fetch instructors from backend
    fetch('http://localhost:3001/api/instructors')
      .then(res => res.json())
      .then(data => setInstructors(data))
      .catch(err => console.error(err));
  }, []);  
  return (
    <div>
      <Header />
      <main class = "main__lessons">
        <section class ="first__section">
          <h1 class = "heading">Book with our Pros!</h1>
          <div class = "profile-area">
            <div class = "container">
              <div class = "row">
                <div class = "col-md-4">
                  <div class="card">
                    <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div>
                    <div class = "img2"><img src = "monte_williams.jpg" alt =""></img></div>
                    <div class = "main-text">
                      <h2>Monte Williams</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button"><button type="button" class="btn btn-light">Book Now</button></div>
                  </div>
                </div>
                
                <div class = "col-md-4">
                <div class="card">
                    <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div>
                    <div class = "img2"><img src = "jorge_margiotta.jpg" alt =""></img></div>
                    <div class = "main-text">
                      <h2>Jorge Margiotta</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button"><button type="button" class="btn btn-light">Book Now</button></div>
                  </div>
                  
                </div>
                
                <div class = "col-md-4">
                <div class="card">
                    <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div>
                    <div class = "img2"><img src = "chandler_harris.jpg" alt =""></img></div>
                    <div class = "main-text">
                      <h2>Chandler Harris</h2>
                      <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
                    </div>
                    <div class = "book-button">
                      <button type="button" class="btn btn-light">
                        <a href="/lessons_booking">Book Now</a>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </main>
      <Footer />
    </div>
  );
};

export default LessonsPage;