import React from "react"
import Header from '../components/Header';
// import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Footer from "../components/Footer";
// import DayTimePicker from '@mooncake-dev/react-day-time-picker';


function ContactPage() {
  return (
    <div>
      <Header />
      <main class = "main__contact">
        <section class ="first__section">
          <h1 class = "heading">Contact Us</h1>
          {/* return <DayTimePicker timeSlotSizeMinutes={60} /> */}
          <div class = "profile-area">
            <div class = "container">
              <div class = "row">
                <div class = "col-md-4">
                  <div class="card">
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
                <div class="card">
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
                <div class="card">
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
            </div>
          </div>
        </section>
      <br></br>
      <br></br>
      <br></br>
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

export default ContactPage;