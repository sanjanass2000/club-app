import React from 'react';

const Footer = () => {
  return (

          <footer class = "footer" /*style="background-color: #deded5;"*/>
          <div class="container p-4">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4">
                <h5 class="mb-3"/* style="letter-spacing: 2px; color: #818963;"*/>Barton Creek Tennis </h5>
                <p>
                Channel your favorite professional player and practice your swing with one of Barton Creek Country Club’s tennis professionals. Whether a long time player or a first time enthusiast, our courts allow everyone to have a fun experience. 
                </p>
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-3"/* style="letter-spacing: 2px; color: #818963;"*/>Links</h5>
                <ul class="list-unstyled mb-0">
                  <li class="mb-1">
                    <a href="#!"/* style="color: #4f4f4f;"*/>Frequently Asked Questions</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-3 col-md-6 mb-4">
                <h5 class="mb-1"/* style="letter-spacing: 2px; color: #818963;"*/>Hours of operation</h5>
                <table class="my-table"/* style="color: #4f4f4f; border-color: #666;"*/>
                  <tbody>
                    <tr>
                      <td>Mon - Fri: </td>
                      <td>&nbsp;8am - 8pm</td>
                    </tr>
                    <tr>
                      <td>Sat - Sun:</td>
                      <td>&nbsp;8am - 6pm</td>
                    </tr>
                    <tr>
                      <td>Phone:</td>
                      <td>&nbsp;(512) 329-4008</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="text-center p-3"/* style="background-color: rgba(0, 0, 0, 0.2);"*/>
            © 2020 Copyright:
            <a class="text-light" href="https://mdbootstrap.com/">BartonCreekTennis</a>
          </div>

        </footer>
        
  );
};

export default Footer;
