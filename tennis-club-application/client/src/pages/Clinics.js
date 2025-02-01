// // import React from "react"
// // import Header from '../components/Header';
// // // import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

// // import MyDatePicker from "../components/DatePicker";
// // import Footer from "../components/Footer";

// // function onChange(timestamp) {
// //   console.log(timestamp);
// // }

// // function ClinicsPage() {
// //   return (
// //     <div>
// //       <Header />
// //       <main class = "main__clinics">
// //         <section class ="first__section">
// //           <h1 class = "heading">Sign up for available clinics!</h1>
// //           <div class="login-box">
// //             <div class = "date__picker__background">
// //               <MyDatePicker onChange={onChange}/>
// //             </div>
// //           </div>
// //         </section>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>

      
// //       {/* <section>
// //         <h1 class = "title">FAQ'S</h1>
// //         <div class = "questions-container">
// //           <div class = "question">
// //             <button>
// //               <span>What type of shoes are we allowed to wear on the courts?</span>
// //               <span><i class="fa-regular fa-chevron-down"></i></span>
// //             </button>
// //           </div>
// //           <div class = "question">
// //             <button>
// //               <span>What type of shoes are we allowed to wear on the courts?</span>
// //               <span><i class="fa-regular fa-chevron-down"></i></span>
// //             </button>
// //             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
// //           </div>
// //           <div class = "question">
// //             <button>
// //               <span>What type of shoes are we allowed to wear on the courts?</span>
// //               <span><i class="fa-regular fa-chevron-down"></i></span>
// //             </button>
// //             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
// //           </div>
// //           <div class = "question">
// //             <button>
// //               <span>What type of shoes are we allowed to wear on the courts?</span>
// //               <span><i class="fas fa-chevron-down d-arrow"></i></span>
// //             </button>
// //             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
// //           </div>
// //           <div class = "question">
// //             <button>
// //               <span>What type of shoes are we allowed to wear on the courts?</span>
// //               <span><i class="fa-regular fa-chevron-down"></i></span>
// //             </button>
// //             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
// //           </div>
// //           <div class = "question">
// //             <button>
// //               <span>What type of shoes are we allowed to wear on the courts?</span>
// //               <span><i class="fa-regular fa-chevron-down"></i></span>
// //             </button>
// //             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
// //           </div>
// //           <div class = "question">
// //             <button>
// //               <span>What type of shoes are we allowed to wear on the courts?</span>
// //               <span><i class="fa-regular fa-chevron-down"></i></span>
// //             </button>
// //             <p>Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it.</p>
// //           </div>
// //         </div>
// //       </section> */}
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <br></br>
// //       <p>
      


// //       </p>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ClinicsPage;


// // import React, { useState } from 'react';
// // import Header from '../components/Header';
// // import Footer from '../components/Footer';

// // const ClinicsPage = () => {
// //   const [currentWeek, setCurrentWeek] = useState(new Date());

// //   const clinicTypes = {
// //     'Open Play': {
// //       background: 'rgb(107, 132, 157)',
// //       color: 'white'
// //     },
// //     "Beginner's": {
// //       background: 'rgb(90, 111, 132)',
// //       color: 'white'
// //     },
// //     'Parent/Teen': {
// //       background: 'rgb(121, 149, 177)', 
// //       color: 'white'
// //     },
// //     "Men's Clinic": {
// //       background: 'rgb(41, 50, 60)',
// //       color: 'white'
// //     },
// //     'Cardio': {
// //       background: 'rgb(73, 89, 106)',
// //       color: 'white'
// //     },
// //     'Ladies 4.5': {
// //       background: 'rgb(56, 69, 82)',
// //       color: 'white'
// //     }
// //   };

// //   return (
// //     <div>
// //       <Header />
// //       <main className="main__clinics">
// //         <section className="first__section">
// //           <h1 className="heading">Sign up for available clinics!</h1>
          
// //           <div className="clinics-container" style={{ 
// //             maxWidth: '1200px', 
// //             margin: '0 auto',
// //             padding: '20px',
// //             backgroundColor: 'rgba(255, 255, 255, 0.7)',
// //             borderRadius: '10px',
// //             boxShadow: '0 8px 24px rgba(35,63,75,0.2)'
// //           }}>
// //             <div style={{ 
// //               display: 'flex', 
// //               justifyContent: 'space-between',
// //               alignItems: 'center',
// //               marginBottom: '20px'
// //             }}>
// //               <button className="btn-nav">← Previous Week</button>
// //               <h2 style={{ 
// //                 fontFamily: 'Montserrat, sans-serif',
// //                 fontSize: '1.5rem'
// //               }}>January 19 - 25, 2025</h2>
// //               <button className="btn-nav">Next Week →</button>
// //             </div>

// //             <div className="clinics-grid" style={{
// //               display: 'grid',
// //               gridTemplateColumns: 'repeat(7, 1fr)',
// //               gap: '10px',
// //             }}>
// //               {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
// //                 <div key={day} style={{
// //                   textAlign: 'center',
// //                   padding: '10px',
// //                   fontWeight: 'bold',
// //                   fontFamily: 'Montserrat, sans-serif'
// //                 }}>
// //                   {day}
// //                 </div>
// //               ))}

// //               {Array(7).fill(null).map((_, index) => (
// //                 <div key={index} style={{
// //                   border: '1px solid #ccc',
// //                   borderRadius: '10px',
// //                   padding: '10px',
// //                   minHeight: '200px'
// //                 }}>
// //                   {/* Example clinic slots */}
// //                   {Object.entries(clinicTypes).map(([name, color], i) => (
// //                     Math.random() > 0.5 && (
// //                       <div key={i} style={{
// //                         backgroundColor: color.background,
// //                         color: color.color,
// //                         margin: '5px 0',
// //                         padding: '8px',
// //                         borderRadius: '5px',
// //                         fontSize: '0.9rem',
// //                         cursor: 'pointer',
// //                         fontFamily: 'Montserrat, sans-serif'
// //                       }}>
// //                         {name}
// //                         <div style={{fontSize: '0.8rem'}}>10:00 - 11:00</div>
// //                       </div>  
// //                     )
// //                   ))}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       </main>
// //       <Footer />

// //       <style jsx>{`
// //         .btn-nav {
// //           background-color: rgb(35,63,75);
// //           color: white;
// //           border: none;
// //           padding: 10px 20px;
// //           border-radius: 5px;
// //           cursor: pointer;
// //           font-family: Montserrat, sans-serif;
// //         }
        
// //         .btn-nav:hover {
// //           background-color: rgb(45,73,85);
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ClinicsPage;


// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import "../styles/Clinics.css";

// const ClinicsPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedClinic, setSelectedClinic] = useState(null);

//   const clinics = {
//     'Sunday': [
//       { name: "Mixed Clinic", time: '9:00 AM - 10:30 AM',
//         description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
//     ],
//     'Monday': [
//       { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
//         description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
//       { name: "Men's Night Clinic & Doubles", time: '6:30 PM - 8:00 PM', 
//         description: 'Participate in drills and play singles or doubles with players of various skill levels. Utilize all the strokes, court movement and footwork patterns.' }
//     ],
//     'Tuesday': [
//       { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
//         description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
//       { name: 'Mixed Clinic', time: '6:30 PM - 8:00 PM',
//         description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
//     ],
//     'Wednesday': [
//       { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
//         description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
//       { name: 'Adult Cardio Tennis', time: '6:30 PM - 8:00 PM',
//         description: 'Cardio Tennis pushes your fitness to a new level with a high-energy workout! This clinic is a fun and social group activity featuring drills for players of all skill levels. The clinic includes warm-up, cardio workout and cool down phases. If you are looking for a new way to get in shape and burn calories, try Cardio Tennis!' }
//     ],
//     'Thursday': [
//       { name: 'Mixed Clinic', time: '12:00 PM - 1:30 PM',
//         description: 'ennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },     
//       { name: "Men's Clinic", time: '6:30 PM - 8:00 PM',
//         description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
//     ],
//     'Friday': [
//       { name: 'Fundamentals Clinic', time: '9:00 AM - 10:30 AM',
//         description: 'Tennis professionals will introduce you to the basic fundamentals of the tennis game. Whether you are looking to get back in the "swing" of it, or discovering tennis for the first time, FUNdamentals Clinic has a spot for you!' },
//       { name: 'Pickleball Social', time: '6:00 PM - 8:00 PM',
//         description: 'Join our pros for our skills & drills pickleball clinic. They will offer up intermediate instruction and help bring your pickleball game to the next level.' }
//     ],
//     'Saturday': [
//       { name: "Men's Clinic", time: '9:00 AM - 10:30 AM',
//         description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' },
//       { name: "Women's Clinic", time: '10:30 AM - 12:00 PM',
//         description: 'Tennis pros will drill you on all strokes, forehands, backhands, volleys, approach shots, overheads and serves. Clinics provide great instruction and a great workout at the same time.' }
//     ]
//   };

//   const getWeekDates = (date) => {
//     const start = new Date(date);
//     start.setDate(start.getDate() - start.getDay());
//     const end = new Date(start);
//     end.setDate(end.getDate() + 6);
//     return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
//   };

//   const changeWeek = (direction) => {
//     const newDate = new Date(currentDate);
//     newDate.setDate(newDate.getDate() + (direction * 7));
//     setCurrentDate(newDate);
//   };

//   return (
//     <div>
//       <Header />
//       <main className="main__clinics">
//         <section className="first__section">
//           <h1 className="heading">Weekly Tennis Clinics</h1>
          
//           <div className="clinics-container">
//             <div className="week-navigation">
//               <button className="btn-nav" onClick={() => changeWeek(-1)}>← Previous Week</button>
//               <h2>{getWeekDates(currentDate)}</h2>
//               <button className="btn-nav" onClick={() => changeWeek(1)}>Next Week →</button>
//             </div>

//             <div className="clinics-grid">
//               {Object.entries(clinics).map(([day, dayClinicList]) => (
//                 <div key={day} className="day-column">
//                   <h3 className="day-header">{day}</h3>
//                   {dayClinicList.map((clinic, index) => (
//                     <div 
//                       key={index}
//                       className="clinic-slot"
//                       onClick={() => setSelectedClinic(clinic)}
//                     >
//                       <div className="clinic-name">{clinic.name}</div>
//                       <div className="clinic-time">{clinic.time}</div>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>

//             {selectedClinic && selectedClinic.description && (
//               <div className="clinic-description">
//                 <h3>{selectedClinic.name}</h3>
//                 <p>{selectedClinic.description}</p>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ClinicsPage;


// import React, { useState, useEffect, useCallback } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { clinicApi } from '../services/api';
// import "../styles/Clinics.css";

// const ClinicsPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedClinic, setSelectedClinic] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [clinicSchedule, setClinicSchedule] = useState({});
//   const [bookingInfo, setBookingInfo] = useState({
//     name: '',
//     phone: '',
//     notes: ''
//   });

//   const fetchClinicSchedule = useCallback(async () => {
//     try {
//       const scheduleData = await clinicApi.getSchedule();
//       console.log('API Response:', scheduleData); // Add this line
//       organizeScheduleByDay(scheduleData);
//     } catch (error) {
//       console.error('Error fetching schedule:', error);
//     }
//   }, []);
  
//   useEffect(() => {
//     fetchClinicSchedule();
//   }, [currentDate, fetchClinicSchedule]);

//   // const organizeScheduleByDay = (scheduleData) => {
//   //   const organized = scheduleData.reduce((acc, clinic) => {
//   //     const date = new Date(clinic.date);
//   //     const day = date.toLocaleDateString('en-US', { weekday: 'long' });
      
//   //     if (!acc[day]) acc[day] = [];
//   //     acc[day].push({
//   //       id: clinic.id,
//   //       name: clinic.name,
//   //       time: `${clinic.start_time} - ${clinic.end_time}`,
//   //       description: clinic.description,
//   //       spots_remaining: clinic.spots_remaining
//   //     });
      
//   //     return acc;
//   //   }, {});
    
//   //   setClinicSchedule(organized);
//   // };

//   const organizeScheduleByDay = (scheduleData) => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const organized = days.reduce((acc, day) => {
//       acc[day] = [];
//       return acc;
//     }, {});
  
//     scheduleData.forEach(clinic => {
//       const date = new Date(clinic.date);
//       const day = days[date.getDay()];
      
//       // Format time strings
//       const startTime = new Date(`2000-01-01T${clinic.start_time}`).toLocaleTimeString('en-US', {
//         hour: 'numeric',
//         minute: 'numeric',
//         hour12: true
//       });
//       const endTime = new Date(`2000-01-01T${clinic.end_time}`).toLocaleTimeString('en-US', {
//         hour: 'numeric',
//         minute: 'numeric',
//         hour12: true
//       });
  
//       organized[day].push({
//         id: clinic.id,
//         name: clinic.name,
//         time: `${startTime} - ${endTime}`,
//         description: clinic.description,
//         spots_remaining: clinic.max_participants - clinic.spots_remaining
//       });
//     });
    
//     return organized;
//   };

  
//   const handleBookClick = (clinic) => {
//     setSelectedClinic(clinic);
//     setShowBookingForm(true);
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await clinicApi.bookClinic({
//         clinic_schedule_id: selectedClinic.id,
//         ...bookingInfo
//       });
      
//       alert('Booking successful!');
//       setShowBookingForm(false);
//       setSelectedClinic(null);
//       fetchClinicSchedule(); // Refresh schedule
//     } catch (error) {
//       alert(error.message || 'Error booking clinic');
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <main className="main__clinics">
//         <section className="first__section">
//           <h1 className="heading">Weekly Tennis Clinics</h1>
          
//           <div className="clinics-container">
//             <div className="week-navigation">
//               <button 
//                 className="btn-nav" 
//                 onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}
//               >
//                 ← Previous Week
//               </button>
//               <h2>{`${currentDate.toLocaleDateString()} - ${new Date(currentDate.getTime() + 6 * 24 * 60 * 60 * 1000).toLocaleDateString()}`}</h2>
//               <button 
//                 className="btn-nav"
//                 onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}
//               >
//                 Next Week →
//               </button>
//             </div>

//             <div className="clinics-grid">
//               {Object.entries(clinicSchedule).map(([day, dayClinicList]) => (
//                 <div key={day} className="day-column">
//                   <h3 className="day-header">{day}</h3>
//                   {dayClinicList.map((clinic, index) => (
//                     <div 
//                       key={index}
//                       className="clinic-slot"
//                       onClick={() => setSelectedClinic(clinic)}
//                     >
//                       <div className="clinic-name">{clinic.name}</div>
//                       <div className="clinic-time">{clinic.time}</div>
//                       <button 
//                         className={`book-button ${clinic.spots_remaining === 0 ? 'disabled' : ''}`}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           if (clinic.spots_remaining > 0) {
//                             handleBookClick(clinic);
//                           }
//                         }}
//                         disabled={clinic.spots_remaining === 0}
//                       >
//                         {clinic.spots_remaining > 0 
//                           ? `Book Now (${clinic.spots_remaining} spots)`
//                           : 'Fully Booked'
//                         }
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>

//             {selectedClinic && !showBookingForm && (
//               <div className="clinic-description">
//                 <h3>{selectedClinic.name}</h3>
//                 <p>{selectedClinic.description}</p>
//               </div>
//             )}

//             {showBookingForm && (
//               <div className="booking-modal">
//                 <div className="booking-modal-content">
//                   <h2>Book {selectedClinic.name}</h2>
//                   <p>{selectedClinic.time} on {currentDate.toLocaleDateString()}</p>
                  
//                   <form onSubmit={handleBookingSubmit}>
//                     <div className="form-group">
//                       <label>Name:</label>
//                       <input
//                         type="text"
//                         required
//                         value={bookingInfo.name}
//                         onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
//                         className="form-input"
//                       />
//                     </div>
                    
//                     <div className="form-group">
//                       <label>Phone:</label>
//                       <input
//                         type="tel"
//                         required
//                         value={bookingInfo.phone}
//                         onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
//                         className="form-input"
//                       />
//                     </div>
                    
//                     <div className="form-group">
//                       <label>Additional Notes:</label>
//                       <textarea
//                         value={bookingInfo.notes}
//                         onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
//                         className="form-input"
//                       />
//                     </div>

//                     <div className="button-group">
//                       <button type="submit" className="btn-book">
//                         Confirm Booking
//                       </button>
//                       <button 
//                         type="button" 
//                         className="btn-cancel"
//                         onClick={() => {
//                           setShowBookingForm(false);
//                           setSelectedClinic(null);
//                         }}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ClinicsPage;


// import React, { useState, useEffect, useCallback } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import "../styles/Clinics.css";

// const ClinicsPage = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedClinic, setSelectedClinic] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [schedule, setSchedule] = useState({});
//   const [bookingInfo, setBookingInfo] = useState({
//     name: '',
//     phone: '',
//     notes: ''
//   });

//   const fetchSchedule = useCallback(async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/clinics/schedule');
//       if (!response.ok) throw new Error('Failed to fetch schedule');
//       const data = await response.json();
//       organizeScheduleByDay(data);
//     } catch (error) {
//       console.error('Error fetching schedule:', error);
//     }
//   }, []);

//   useEffect(() => {
//     fetchSchedule();
//   }, [fetchSchedule]);

//   const formatTime = (timeStr) => {
//     const date = new Date(`2000-01-01T${timeStr}`);
//     return date.toLocaleTimeString('en-US', {
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   const organizeScheduleByDay = (data) => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const organized = days.reduce((acc, day) => {
//       acc[day] = [];
//       return acc;
//     }, {});

//     data.forEach(clinic => {
//       const day = days[new Date(clinic.date).getDay()];
//       organized[day].push({
//         id: clinic.id,
//         name: clinic.name,
//         description: clinic.description,
//         time: `${formatTime(clinic.start_time)} - ${formatTime(clinic.end_time)}`,
//         spots_remaining: clinic.max_participants - (clinic.spots_remaining || 0)
//       });
//     });

//     setSchedule(organized);
//   };

//   const formatDateRange = (date) => {
//     const start = new Date(date);
//     const end = new Date(date);
//     end.setDate(end.getDate() + 6);
    
//     return `${start.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric'
//     })} - ${end.toLocaleDateString('en-US', { 
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric'
//     })}`;
//   };

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:3001/api/clinics/book', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           clinic_schedule_id: selectedClinic.id,
//           ...bookingInfo
//         })
//       });

//       if (!response.ok) throw new Error('Booking failed');
      
//       alert('Booking successful!');
//       setShowBookingForm(false);
//       setSelectedClinic(null);
//       fetchSchedule();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <main className="main__clinics">
//         <section className="first__section">
//           <h1 className="heading">Weekly Tennis Clinics</h1>
          
//           <div className="clinics-container">
//             <div className="week-navigation">
//               <button 
//                 className="btn-nav"
//                 onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)))}
//               >
//                 ← Previous Week
//               </button>
//               <h2>{formatDateRange(currentDate)}</h2>
//               <button 
//                 className="btn-nav"
//                 onClick={() => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)))}
//               >
//                 Next Week →
//               </button>
//             </div>

//             <div className="clinics-grid">
//               {Object.entries(schedule).map(([day, clinics]) => (
//                 <div key={day} className="day-column">
//                   <h3 className="day-header">{day}</h3>
//                   {clinics.map((clinic, index) => (
//                     <div 
//                       key={index}
//                       className="clinic-slot"
//                       onClick={() => setSelectedClinic(clinic)}
//                     >
//                       <div className="clinic-name">{clinic.name}</div>
//                       <div className="clinic-time">{clinic.time}</div>
//                       <button 
//                         className={`book-button ${clinic.spots_remaining === 0 ? 'disabled' : ''}`}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           if (clinic.spots_remaining > 0) {
//                             setSelectedClinic(clinic);
//                             setShowBookingForm(true);
//                           }
//                         }}
//                         disabled={clinic.spots_remaining === 0}
//                       >
//                         {clinic.spots_remaining > 0 
//                           ? `Book Now (${clinic.spots_remaining} spots)`
//                           : 'Fully Booked'
//                         }
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>

//             {showBookingForm && (
//               <div className="booking-modal">
//                 <div className="booking-modal-content">
//                   <h2>Book {selectedClinic.name}</h2>
//                   <form onSubmit={handleBookingSubmit}>
//                     <div className="form-group">
//                       <label>Name:</label>
//                       <input
//                         type="text"
//                         required
//                         value={bookingInfo.name}
//                         onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
//                         className="form-input"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>Phone:</label>
//                       <input
//                         type="tel"
//                         required
//                         value={bookingInfo.phone}
//                         onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
//                         className="form-input"
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>Notes:</label>
//                       <textarea
//                         value={bookingInfo.notes}
//                         onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
//                         className="form-input"
//                       />
//                     </div>
//                     <div className="button-group">
//                       <button type="submit" className="btn-book">Confirm</button>
//                       <button 
//                         type="button" 
//                         className="btn-cancel"
//                         onClick={() => {
//                           setShowBookingForm(false);
//                           setSelectedClinic(null);
//                         }}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ClinicsPage;


// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const ClinicsPage = () => {
//   const [schedule, setSchedule] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedClinic, setSelectedClinic] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [bookingInfo, setBookingInfo] = useState({
//     name: '',
//     phone: '',
//     notes: ''
//   });

//   useEffect(() => {
//     fetchSchedule();
//   }, []);

//   const fetchSchedule = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/clinics/schedule');
//       if (!response.ok) throw new Error('Failed to fetch schedule');
//       const data = await response.json();
      
//       const grouped = data.reduce((acc, clinic) => {
//         const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][clinic.day_of_week];
//         if (!acc[day]) acc[day] = [];
//         acc[day].push(clinic);
//         return acc;
//       }, {});
      
//       setSchedule(grouped);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const formatTime = (timeStr) => {
//     const [hours, minutes] = timeStr.split(':');
//     const date = new Date();
//     date.setHours(parseInt(hours), parseInt(minutes));
//     return date.toLocaleTimeString('en-US', { 
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   return (
//     <div>
//       <Header />
//       <main className="main__clinics">
//         <section className="first__section">
//           <h1 className="heading">Weekly Tennis Clinics</h1>
          
//           {error && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//               Error loading clinics: {error}
//             </div>
//           )}
          
//           <div className="clinics-container">
//             <div className="clinics-grid">
//               {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
//                 <div key={day} className="day-column">
//                   <h3 className="day-header">{day}</h3>
//                   <div className="clinic-slots">
//                     {schedule[day]?.map((clinic) => (
//                       <div 
//                         key={clinic.id}
//                         className="clinic-slot"
//                       >
//                         <div className="clinic-name">{clinic.name}</div>
//                         <div className="clinic-time">
//                           {formatTime(clinic.start_time)} - {formatTime(clinic.end_time)}
//                         </div>
//                         <p className="clinic-description">{clinic.description}</p>
//                         <p className="clinic-capacity">Capacity: {clinic.capacity} players</p>
//                         <button 
//                           className="book-button"
//                           onClick={() => {
//                             setSelectedClinic(clinic);
//                             setShowBookingForm(true);
//                           }}
//                         >
//                           Book Now
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {showBookingForm && (
//               <div className="booking-modal">
//                 <div className="booking-modal-content">
//                   <h2>Book {selectedClinic?.name}</h2>
//                   <form className="booking-form">
//                     <div className="form-group">
//                       <label>Name:</label>
//                       <input
//                         type="text"
//                         className="form-input"
//                         value={bookingInfo.name}
//                         onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>Phone:</label>
//                       <input
//                         type="tel"
//                         className="form-input"
//                         value={bookingInfo.phone}
//                         onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label>Notes:</label>
//                       <textarea
//                         className="form-input"
//                         value={bookingInfo.notes}
//                         onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
//                       />
//                     </div>
//                     <div className="button-group">
//                       <button type="submit" className="btn-book">
//                         Confirm
//                       </button>
//                       <button
//                         type="button"
//                         className="btn-cancel"
//                         onClick={() => {
//                           setShowBookingForm(false);
//                           setSelectedClinic(null);
//                         }}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ClinicsPage;


// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import "../styles/Clinics.css";

// const ClinicsPage = () => {
//   const [schedule, setSchedule] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedClinic, setSelectedClinic] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [currentDate] = useState(new Date("2025-01-19"));
//   const [bookingInfo, setBookingInfo] = useState({
//     name: '',
//     phone: '',
//     notes: ''
//   });

//   useEffect(() => {
//     fetchSchedule();
//   }, []);

//   const fetchSchedule = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/clinics/schedule');
//       if (!response.ok) throw new Error('Failed to fetch schedule');
//       const data = await response.json();
      
//       const grouped = data.reduce((acc, clinic) => {
//         const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][clinic.day_of_week];
//         if (!acc[day]) acc[day] = [];
//         acc[day].push(clinic);
//         return acc;
//       }, {});
      
//       setSchedule(grouped);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const formatTime = (timeStr) => {
//     const [hours, minutes] = timeStr.split(':');
//     const date = new Date();
//     date.setHours(parseInt(hours), parseInt(minutes));
//     return date.toLocaleTimeString('en-US', { 
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   const formatDateRange = (date) => {
//     const start = new Date(date);
//     const end = new Date(date);
//     end.setDate(end.getDate() + 6);
    
//     return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
//   };

//   return (
//     <div>
//       <Header />
//       <main className="main__clinics">
//         <h1 className="heading">Weekly Tennis Clinics</h1>
        
//         <div className="clinics-container">
//           <div className="week-navigation">
//             <button className="btn-nav">← Previous Week</button>
//             <h2>{formatDateRange(currentDate)}</h2>
//             <button className="btn-nav">Next Week →</button>
//           </div>

//           <div className="clinics-grid">
//             {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
//               <div key={day} className="day-column">
//                 <h3 className="day-header">{day}</h3>
//                 {schedule[day]?.map((clinic) => (
//                   <div 
//                     key={clinic.id}
//                     className={`clinic-slot ${selectedClinic?.id === clinic.id ? 'selected' : ''}`}
//                     onClick={() => setSelectedClinic(clinic)}
//                   >
//                     <div className="clinic-name">{clinic.name}</div>
//                     <div className="clinic-time">
//                       {formatTime(clinic.start_time)} - {formatTime(clinic.end_time)}
//                     </div>
//                     <button 
//                       className="book-button"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedClinic(clinic);
//                         setShowBookingForm(true);
//                       }}
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {selectedClinic && !showBookingForm && (
//             <div className="clinic-description">
//               <h3>{selectedClinic.name}</h3>
//               <p>{selectedClinic.description}</p>
//             </div>
//           )}

//           {showBookingForm && (
//             <div className="booking-modal">
//               <div className="booking-modal-content">
//                 <h2>Book {selectedClinic?.name}</h2>
//                 <form>
//                   <div className="form-group">
//                     <label>Name:</label>
//                     <input
//                       type="text"
//                       value={bookingInfo.name}
//                       onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
//                       required
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Phone:</label>
//                     <input
//                       type="tel"
//                       value={bookingInfo.phone}
//                       onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
//                       required
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Notes:</label>
//                     <textarea
//                       value={bookingInfo.notes}
//                       onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="button-group">
//                     <button type="submit" className="btn-book">Confirm</button>
//                     <button 
//                       type="button" 
//                       className="btn-cancel"
//                       onClick={() => {
//                         setShowBookingForm(false);
//                         setSelectedClinic(null);
//                       }}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ClinicsPage;


// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import "../styles/Clinics.css";

// const ClinicsPage = () => {
//   const [schedule, setSchedule] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedClinic, setSelectedClinic] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [currentDate] = useState(new Date("2025-01-19"));
//   const [bookingInfo, setBookingInfo] = useState({
//     name: '',
//     phone: '',
//     notes: ''
//   });
//   const [bookingStatus, setBookingStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setBookingStatus(null);

//     try {
//       const response = await fetch('http://localhost:3001/api/clinics/book', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           clinicId: selectedClinic.id,
//           ...bookingInfo
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || 'Booking failed');

//       setBookingStatus({
//         type: 'success',
//         message: 'Booking confirmed! Check your email for details.'
//       });
      
//       await fetchSchedule(); // Refresh schedule data
      
//       setTimeout(() => {
//         setShowBookingForm(false);
//         setSelectedClinic(null);
//         setBookingInfo({ name: '', phone: '', notes: '' });
//       }, 2000);

//     } catch (error) {
//       setBookingStatus({
//         type: 'error',
//         message: error.message
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     if (!isSubmitting) {
//       setShowBookingForm(false);
//       setSelectedClinic(null);
//       setBookingInfo({ name: '', phone: '', notes: '' });
//     }
//   };

//   useEffect(() => {
//     fetchSchedule();
//   }, []);

//   const fetchSchedule = async () => {
//     try {
//       const response = await fetch('http://localhost:3001/api/clinics/schedule');
//       if (!response.ok) throw new Error('Failed to fetch schedule');
//       const data = await response.json();
      
//       const grouped = data.reduce((acc, clinic) => {
//         const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][clinic.day_of_week];
//         if (!acc[day]) acc[day] = [];
//         acc[day].push(clinic);
//         return acc;
//       }, {});
      
//       setSchedule(grouped);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const formatTime = (timeStr) => {
//     const [hours, minutes] = timeStr.split(':');
//     const date = new Date();
//     date.setHours(parseInt(hours), parseInt(minutes));
//     return date.toLocaleTimeString('en-US', { 
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//   };

//   const formatDateRange = (date) => {
//     const start = new Date(date);
//     const end = new Date(date);
//     end.setDate(end.getDate() + 6);
//     return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
//   };

//   const getAvailabilityText = (clinic) => {
//     const available = clinic.capacity - clinic.booked;
//     return `${available} of ${clinic.capacity} spots available`;
//   };

//   return (
//     <div>
//       <Header />
//       <main className="main__clinics">
//         <h1 className="heading">Weekly Tennis Clinics</h1>
        
//         <div className="clinics-container">
//           <div className="week-navigation">
//             <button className="btn-nav">← Previous Week</button>
//             <h2>{formatDateRange(currentDate)}</h2>
//             <button className="btn-nav">Next Week →</button>
//           </div>

//           <div className="clinics-grid">
//             {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
//               <div key={day} className="day-column">
//                 <h3 className="day-header">{day}</h3>
//                 {schedule[day]?.map((clinic) => (
//                   <div 
//                     key={clinic.id}
//                     className={`clinic-slot ${selectedClinic?.id === clinic.id ? 'selected' : ''}`}
//                     onClick={() => setSelectedClinic(clinic)}
//                   >
//                     <div className="clinic-name">{clinic.name}</div>
//                     <div className="clinic-time">
//                       {formatTime(clinic.start_time)} - {formatTime(clinic.end_time)}
//                     </div>
//                     <div className="clinic-availability">
//                       {getAvailabilityText(clinic)}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>

//           {selectedClinic && !showBookingForm && (
//             <div className="clinic-description">
//               <h3>{selectedClinic.name}</h3>
//               <p>{selectedClinic.description}</p>
//               <div className="description-footer">
//                 <span className="availability-text">{getAvailabilityText(selectedClinic)}</span>
//                 <button 
//                   className="btn-book-now"
//                   onClick={() => setShowBookingForm(true)}
//                   disabled={selectedClinic.capacity <= selectedClinic.booked}
//                 >
//                   {selectedClinic.capacity <= selectedClinic.booked ? 'Fully Booked' : 'Book Now'}
//                 </button>
//               </div>
//             </div>
//           )}

//           {showBookingForm && (
//             <div className="booking-modal">
//               <div className="booking-modal-content">
//                 <h2>Book {selectedClinic?.name}</h2>
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label>Name:</label>
//                     <input
//                       type="text"
//                       value={bookingInfo.name}
//                       onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
//                       required
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Phone:</label>
//                     <input
//                       type="tel"
//                       value={bookingInfo.phone}
//                       onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
//                       required
//                       className="form-input"
//                       pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
//                       title="Please enter a valid phone number (e.g., 1234567890)"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>Notes:</label>
//                     <textarea
//                       value={bookingInfo.notes}
//                       onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
//                       className="form-input"
//                     />
//                   </div>
//                   {bookingStatus && (
//                     <div className={`booking-status ${bookingStatus.type}`}>
//                       {bookingStatus.message}
//                     </div>
//                   )}
//                   <div className="button-group">
//                     <button type="submit" className="btn-book" disabled={isSubmitting}>
//                       {isSubmitting ? 'Booking...' : 'Confirm'}
//                     </button>
//                     <button 
//                       type="button" 
//                       className="btn-cancel"
//                       onClick={handleCancel}
//                       disabled={isSubmitting}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ClinicsPage;


import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/Clinics.css";

const ClinicsPage = () => {
  const [schedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);
  const [selectedClinic, setSelectedClinic] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [currentDate] = useState(new Date("2025-01-19"));
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    phone: '',
    notes: ''
  });
  const [bookingStatus, setBookingStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setBookingStatus(null);

    try {
      const response = await fetch('http://localhost:3001/api/clinics/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clinic_schedule_id: selectedClinic.id,
          booking_date: new Date(currentDate).toISOString().split('T')[0],
          start_time: selectedClinic.start_time,
          end_time: selectedClinic.end_time,
          name: bookingInfo.name,
          phone: bookingInfo.phone,
          notes: bookingInfo.notes
        }),
      });

      const data = await response.json();
      console.log('Booking response:', data);

      if (!response.ok) {
        console.error('Booking error details:', data);
        throw new Error(data.message || 'Booking failed');
      }

      setBookingStatus({
        type: 'success',
        message: 'Booking confirmed! Check your email for details.'
      });
      
      await fetchSchedule(); // Refresh schedule data
      
      setTimeout(() => {
        setShowBookingForm(false);
        setSelectedClinic(null);
        setBookingInfo({ name: '', phone: '', notes: '' });
      }, 2000);

    } catch (error) {
      setBookingStatus({
        type: 'error',
        message: error.message
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (!isSubmitting) {
      setShowBookingForm(false);
      setSelectedClinic(null);
      setBookingInfo({ name: '', phone: '', notes: '' });
    }
  };

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/clinics/schedule');
      if (!response.ok) throw new Error('Failed to fetch schedule');
      const data = await response.json();
      
      const grouped = data.reduce((acc, clinic) => {
        const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][clinic.day_of_week];
        if (!acc[day]) acc[day] = [];
        acc[day].push(clinic);
        return acc;
      }, {});
      
      setSchedule(grouped);
    } catch (err) {
      setError(err.message);
    }
  };

  const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDateRange = (date) => {
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 6);
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  };

  const getAvailabilityText = (clinic) => {
    const available = clinic.capacity - clinic.booked;
    return `${available} of ${clinic.capacity} spots available`;
  };

  return (
    <div>
      <Header />
      <main className="main__clinics">
        <h1 className="heading">Weekly Tennis Clinics</h1>
        
        <div className="clinics-container">
          <div className="week-navigation">
            <button className="btn-nav">← Previous Week</button>
            <h2>{formatDateRange(currentDate)}</h2>
            <button className="btn-nav">Next Week →</button>
          </div>

          <div className="clinics-grid">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <div key={day} className="day-column">
                <h3 className="day-header">{day}</h3>
                {schedule[day]?.map((clinic) => (
                  <div 
                    key={clinic.id}
                    className={`clinic-slot ${selectedClinic?.id === clinic.id ? 'selected' : ''}`}
                    onClick={() => setSelectedClinic(clinic)}
                  >
                    <div className="clinic-name">{clinic.name}</div>
                    <div className="clinic-time">
                      {formatTime(clinic.start_time)} - {formatTime(clinic.end_time)}
                    </div>
                    <div className="clinic-availability">
                      {getAvailabilityText(clinic)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {selectedClinic && !showBookingForm && (
            <div className="clinic-description">
              <h3>{selectedClinic.name}</h3>
              <p>{selectedClinic.description}</p>
              <div className="description-footer">
                <span className="availability-text">{getAvailabilityText(selectedClinic)}</span>
                <button 
                  className="btn-book-now"
                  onClick={() => setShowBookingForm(true)}
                  disabled={selectedClinic.capacity <= selectedClinic.booked}
                >
                  {selectedClinic.capacity <= selectedClinic.booked ? 'Fully Booked' : 'Book Now'}
                </button>
              </div>
            </div>
          )}

          {showBookingForm && (
            <div className="booking-modal">
              <div className="booking-modal-content">
                <h2>Book {selectedClinic?.name}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      value={bookingInfo.name}
                      onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      value={bookingInfo.phone}
                      onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
                      required
                      className="form-input"
                      pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                      title="Please enter a valid phone number (e.g., 1234567890)"
                    />
                  </div>
                  <div className="form-group">
                    <label>Notes:</label>
                    <textarea
                      value={bookingInfo.notes}
                      onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  {bookingStatus && (
                    <div className={`booking-status ${bookingStatus.type}`}>
                      {bookingStatus.message}
                    </div>
                  )}
                  <div className="button-group">
                    <button type="submit" className="btn-book" disabled={isSubmitting}>
                      {isSubmitting ? 'Booking...' : 'Confirm'}
                    </button>
                    <button 
                      type="button" 
                      className="btn-cancel"
                      onClick={handleCancel}
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClinicsPage;