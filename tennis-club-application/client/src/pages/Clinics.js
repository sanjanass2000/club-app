// import React from "react"
// import Header from '../components/Header';
// // import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

// import MyDatePicker from "../components/DatePicker";
// import Footer from "../components/Footer";

// function onChange(timestamp) {
//   console.log(timestamp);
// }

// function ClinicsPage() {
//   return (
//     <div>
//       <Header />
//       <main class = "main__clinics">
//         <section class ="first__section">
//           <h1 class = "heading">Sign up for available clinics!</h1>
//           <div class="login-box">
//             <div class = "date__picker__background">
//               <MyDatePicker onChange={onChange}/>
//             </div>
//           </div>
//         </section>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>

      
//       {/* <section>
//         <h1 class = "title">FAQ'S</h1>
//         <div class = "questions-container">
//           <div class = "question">
//             <button>
//               <span>What type of shoes are we allowed to wear on the courts?</span>
//               <span><i class="fa-regular fa-chevron-down"></i></span>
//             </button>
//           </div>
//           <div class = "question">
//             <button>
//               <span>What type of shoes are we allowed to wear on the courts?</span>
//               <span><i class="fa-regular fa-chevron-down"></i></span>
//             </button>
//             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
//           </div>
//           <div class = "question">
//             <button>
//               <span>What type of shoes are we allowed to wear on the courts?</span>
//               <span><i class="fa-regular fa-chevron-down"></i></span>
//             </button>
//             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
//           </div>
//           <div class = "question">
//             <button>
//               <span>What type of shoes are we allowed to wear on the courts?</span>
//               <span><i class="fas fa-chevron-down d-arrow"></i></span>
//             </button>
//             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
//           </div>
//           <div class = "question">
//             <button>
//               <span>What type of shoes are we allowed to wear on the courts?</span>
//               <span><i class="fa-regular fa-chevron-down"></i></span>
//             </button>
//             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
//           </div>
//           <div class = "question">
//             <button>
//               <span>What type of shoes are we allowed to wear on the courts?</span>
//               <span><i class="fa-regular fa-chevron-down"></i></span>
//             </button>
//             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
//           </div>
//           <div class = "question">
//             <button>
//               <span>What type of shoes are we allowed to wear on the courts?</span>
//               <span><i class="fa-regular fa-chevron-down"></i></span>
//             </button>
//             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
//           </div>
//         </div>
//       </section> */}
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <p>
      


//       </p>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ClinicsPage;


// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const ClinicsPage = () => {
//   const [currentWeek, setCurrentWeek] = useState(new Date());

//   const clinicTypes = {
//     'Open Play': {
//       background: 'rgb(107, 132, 157)',
//       color: 'white'
//     },
//     "Beginner's": {
//       background: 'rgb(90, 111, 132)',
//       color: 'white'
//     },
//     'Parent/Teen': {
//       background: 'rgb(121, 149, 177)', 
//       color: 'white'
//     },
//     "Men's Clinic": {
//       background: 'rgb(41, 50, 60)',
//       color: 'white'
//     },
//     'Cardio': {
//       background: 'rgb(73, 89, 106)',
//       color: 'white'
//     },
//     'Ladies 4.5': {
//       background: 'rgb(56, 69, 82)',
//       color: 'white'
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <main className="main__clinics">
//         <section className="first__section">
//           <h1 className="heading">Sign up for available clinics!</h1>
          
//           <div className="clinics-container" style={{ 
//             maxWidth: '1200px', 
//             margin: '0 auto',
//             padding: '20px',
//             backgroundColor: 'rgba(255, 255, 255, 0.7)',
//             borderRadius: '10px',
//             boxShadow: '0 8px 24px rgba(35,63,75,0.2)'
//           }}>
//             <div style={{ 
//               display: 'flex', 
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '20px'
//             }}>
//               <button className="btn-nav">← Previous Week</button>
//               <h2 style={{ 
//                 fontFamily: 'Montserrat, sans-serif',
//                 fontSize: '1.5rem'
//               }}>January 19 - 25, 2025</h2>
//               <button className="btn-nav">Next Week →</button>
//             </div>

//             <div className="clinics-grid" style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(7, 1fr)',
//               gap: '10px',
//             }}>
//               {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
//                 <div key={day} style={{
//                   textAlign: 'center',
//                   padding: '10px',
//                   fontWeight: 'bold',
//                   fontFamily: 'Montserrat, sans-serif'
//                 }}>
//                   {day}
//                 </div>
//               ))}

//               {Array(7).fill(null).map((_, index) => (
//                 <div key={index} style={{
//                   border: '1px solid #ccc',
//                   borderRadius: '10px',
//                   padding: '10px',
//                   minHeight: '200px'
//                 }}>
//                   {/* Example clinic slots */}
//                   {Object.entries(clinicTypes).map(([name, color], i) => (
//                     Math.random() > 0.5 && (
//                       <div key={i} style={{
//                         backgroundColor: color.background,
//                         color: color.color,
//                         margin: '5px 0',
//                         padding: '8px',
//                         borderRadius: '5px',
//                         fontSize: '0.9rem',
//                         cursor: 'pointer',
//                         fontFamily: 'Montserrat, sans-serif'
//                       }}>
//                         {name}
//                         <div style={{fontSize: '0.8rem'}}>10:00 - 11:00</div>
//                       </div>  
//                     )
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />

//       <style jsx>{`
//         .btn-nav {
//           background-color: rgb(35,63,75);
//           color: white;
//           border: none;
//           padding: 10px 20px;
//           border-radius: 5px;
//           cursor: pointer;
//           font-family: Montserrat, sans-serif;
//         }
        
//         .btn-nav:hover {
//           background-color: rgb(45,73,85);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ClinicsPage;


import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/Clinics.css";

const ClinicsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedClinic, setSelectedClinic] = useState(null);

  const clinics = {
    'Sunday': [
      { name: "Mixed Clinic", time: '9:00 AM - 10:30 AM',
        description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
    ],
    'Monday': [
      { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
        description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
      { name: "Men's Night Clinic & Doubles", time: '6:30 PM - 8:00 PM', 
        description: 'Participate in drills and play singles or doubles with players of various skill levels. Utilize all the strokes, court movement and footwork patterns.' }
    ],
    'Tuesday': [
      { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
        description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
      { name: 'Mixed Clinic', time: '6:30 PM - 8:00 PM',
        description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
    ],
    'Wednesday': [
      { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
        description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
      { name: 'Adult Cardio Tennis', time: '6:30 PM - 8:00 PM',
        description: 'Cardio Tennis pushes your fitness to a new level with a high-energy workout! This clinic is a fun and social group activity featuring drills for players of all skill levels. The clinic includes warm-up, cardio workout and cool down phases. If you are looking for a new way to get in shape and burn calories, try Cardio Tennis!' }
    ],
    'Thursday': [
      { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
        description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },     
      { name: "Men's Clinic", time: '6:30 PM - 8:00 PM',
        description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
    ],
    'Friday': [
      { name: 'Fundamentals Clinic', time: '9:00 AM - 10:30 AM',
        description: 'Tennis professionals will introduce you to the basic fundamentals of the tennis game. Whether you are looking to get back in the "swing" of it, or discovering tennis for the first time, FUNdamentals Clinic has a spot for you!' },
      { name: 'Pickleball Social', time: '6:00 PM - 8:00 PM',
        description: 'Join our pros for our skills & drills pickleball clinic. They will offer up intermediate instruction and help bring your pickleball game to the next level.' }
    ],
    'Saturday': [
      { name: "Men's Clinic", time: '9:00 AM - 10:30 AM',
        description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
      { name: "Women's Clinic", time: '10:30 AM - 12:00 PM',
        description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
    ]
  };

  const getWeekDates = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  };

  const changeWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
  };

  return (
    <div>
      <Header />
      <main className="main__clinics">
        <section className="first__section">
          <h1 className="heading">Weekly Tennis Clinics</h1>
          
          <div className="clinics-container">
            <div className="week-navigation">
              <button className="btn-nav" onClick={() => changeWeek(-1)}>← Previous Week</button>
              <h2>{getWeekDates(currentDate)}</h2>
              <button className="btn-nav" onClick={() => changeWeek(1)}>Next Week →</button>
            </div>

            <div className="clinics-grid">
              {Object.entries(clinics).map(([day, dayClinicList]) => (
                <div key={day} className="day-column">
                  <h3 className="day-header">{day}</h3>
                  {dayClinicList.map((clinic, index) => (
                    <div 
                      key={index}
                      className="clinic-slot"
                      onClick={() => setSelectedClinic(clinic)}
                    >
                      <div className="clinic-name">{clinic.name}</div>
                      <div className="clinic-time">{clinic.time}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {selectedClinic && selectedClinic.description && (
              <div className="clinic-description">
                <h3>{selectedClinic.name}</h3>
                <p>{selectedClinic.description}</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClinicsPage;