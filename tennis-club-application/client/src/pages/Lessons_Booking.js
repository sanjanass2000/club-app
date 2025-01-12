import React, {useState} from "react"
import Header from '../components/Header';
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Footer from "../components/Footer";
// import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import Calendar from 'react-calendar';
import Time from "../components/Time/Time";


function Lessons_BookingPage() {

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 
  
  return (
    <div>
      <Header />
      <main class = "main__lessons__booking">
        <section class ="first__section">
          <div className= "lessons__booking">
            <h1 className='heading'>Chandler's Lesson Availability</h1>
            <p>Available slots shown in military time</p>
            <div className = 'calendar__times__container'>
              <div className='calendar__container'>
                <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
              </div>

              {date.length > 0 ? (
              <p>
                <span>Start:</span>
                {date[0].toDateString()}
                &nbsp;
                &nbsp;
                <span>End:</span>{date[1].toDateString()}
              </p>
                      ) : (
              <p>
                  {/* <span>Default selected date:</span>{date.toDateString()} */}
              </p> 
                      )
              }  
              
              <hr className = 'divider' />
              <div className = 'time__container'>
                <Time showTime={showTime} date={date}/>
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

export default Lessons_BookingPage;