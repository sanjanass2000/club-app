// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

// import { Route, Switch } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom'; // Import useHistory
// import Header from "../components/Header";
// import FAQItem from '../components/FAQItem';

// import '../styles/Home.css';
// import Footer from "../components/Footer";

// const Home = () => {

//   const navigate = useNavigate(); // Initialize useHistory

//   const handleButtonClick = (path) => {
//     navigate('/header'); // Navigate to the specified path when the button is clicked
//   };

//   const faqData = [
//     {
//       question: "What type of shoes are we allowed to wear?",
//       answer:
//         "You are allowed to wear tennis shoes or sports shoes with non-marking soles on the courts. Sandals, flip-flops, and shoes with dark soles are not allowed.",
//     },
//     {
//       question: "What are the court reservation timings?",
//       answer:
//         "Courts are available for reservation from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 9:00 PM on weekends.",
//     },
//     // Add more FAQ items as needed
//   ];

//   console.log(faqData);

//   return (
//     <div>
//       <Header />
//       <main class = "main__home">
//         <section class ="first__section">
//         <h1 class = "heading">Welcome to Barton Creek Tennis</h1>
//         <div class = "profile-area">
//             <div class = "container">
//               <div class = "row">
//                 <div class = "col-md-4">
//                   <div class="home-card">
//                     {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
//                     {/* <div class = "img2"><img src = "monte_williams.jpg" alt =""></img></div> */}
//                     <div class = "main-text">
//                       <h2>Lessons</h2>
//                       <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
//                     </div>
//                     <div class = "book-button"><button type="button" class="btn btn-dark">Book Now</button></div>
//                   </div>
//                 </div>
                
//                 <div class = "col-md-4">
//                 <div class="home-card">
//                     {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
//                     {/* <div class = "img2"><img src = "jorge_margiotta.jpg" alt =""></img></div> */}
//                     <div class = "main-text">
//                       <h2>Clinics</h2>
//                       <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
//                     </div>
//                     <div class = "book-button"><button type="button" class="btn btn-dark">Sign Up</button></div>
//                   </div>
                  
//                 </div>
                
//                 <div class = "col-md-4">
//                 <div class="home-card">
//                     {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
//                     {/* <div class = "img2"><img src = "chandler_harris.jpg" alt =""></img></div> */}
//                     <div class = "main-text">
//                       <h2>Junior Tennis Academy</h2>
//                       <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
//                     </div>
//                     <div class = "book-button">
//                       <button type="button" class="btn btn-dark">
//                         <a href="/kids">Register</a>
//                       </button>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <br></br>
//               <div class = "row">
//                 <div class = "col-md-4">
//                   <div class="home-card">
//                     {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
//                     {/* <div class = "img2"><img src = "monte_williams.jpg" alt =""></img></div> */}
//                     <div class = "main-text">
//                       <h2>Rentals</h2>
//                       <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
//                     </div>
//                     <div class = "book-button"><button type="button" class="btn btn-dark">Rent Now</button></div>
//                   </div>
//                 </div>
                
//                 <div class = "col-md-4">
//                 <div class="home-card">
//                     {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
//                     {/* <div class = "img2"><img src = "jorge_margiotta.jpg" alt =""></img></div> */}
//                     <div class = "main-text">
//                       <h2>Packages</h2>
//                       <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
//                     </div>
//                     <div class = "book-button"><button type="button" class="btn btn-dark">Sign Up</button></div>
//                   </div>
                  
//                 </div>
                
//                 <div class = "col-md-4">
//                 <div class="home-card">
//                     {/* <div class = "img1"><img src = "barton-hills.jpg" alt =""></img></div> */}
//                     {/* <div class = "img2"><img src = "chandler_harris.jpg" alt =""></img></div> */}
//                     <div class = "main-text">
//                       <h2>Stringing</h2>
//                       <p>Lorem ipsum dikir sit amet, conecutur adpasdfasfd asdjfadsf asdfhasdfjh sadfsadf asdfasfsdf asdfasdf adsfsadf</p>
//                     </div>
//                     <div class = "book-button">
//                       <button type="button" class="btn btn-dark stretched-link">
//                         <a href="/kids">Submit A Request</a>
//                       </button>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <br></br>
//       <section class ="faq__section">
//           <h1 className="title">FAQ'S</h1>
//           <div className="questions-container">
//             {/* Use map to render FAQ items */}
//             {faqData.map((faq, index) => (
//               <FAQItem
//                 key={index}
//                 question={faq.question}
//                 answer={faq.answer}
//               />
//             ))}
//           </div>
//         </section>
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

      
//       </main>
//       <Footer />
//     </div>
    
//   );
// };

// export default Home;



// import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Grid, CardActionArea, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import FAQItem from "../components/FAQItem";
// import "../styles/Home.css";
// import Footer from "../components/Footer";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const cardsData = [
//     {
//       title: "Lessons",
//       description:
//         "Personalized tennis lessons to enhance your skills and improve your game.",
//       path: "/lessons",
//     },
//     {
//       title: "Clinics",
//       description:
//         "Join group tennis clinics for comprehensive training.",
//       path: "/clinics",
//     },
//     {
//       title: "Junior Tennis Academy",
//       description:
//         "Enroll your child in our Junior Tennis Academy for structured training.",
//       path: "/kids",
//     },
//     {
//       title: "Rentals",
//       description:
//         "Rent tennis equipment and courts to enjoy the game on your terms.",
//       path: "/rentals",
//     },
//     {
//       title: "Packages",
//       description:
//         "Explore our tennis packages for lessons, clinics, and court rentals.",
//       path: "/packages",
//     },
//     {
//       title: "Stringing",
//       description:
//         "Get your tennis racket strung by our professional stringing service.",
//       path: "/stringing",
//     },
//   ];

//   const faqData = [
//     {
//       question: "What type of shoes are we allowed to wear?",
//       answer:
//         "You are allowed to wear tennis shoes or sports shoes with non-marking soles on the courts. Sandals, flip-flops, and shoes with dark soles are not allowed.",
//     },
//     {
//       question: "What are the court reservation timings?",
//       answer:
//         "Courts are available for reservation from 8:00 AM to 10:00 PM on weekdays and 9:00 AM to 9:00 PM on weekends.",
//     },
//   ];

//   return (
//     <div>
//       <Header />
//       <main className="main__home">
//         <section className="first__section">
//           <h1 className="heading">Welcome to Barton Creek Tennis</h1>
//           <div className="profile-area">
//             <div className="container">
//               <Grid container spacing={4}>
//                 {cardsData.map((card, index) => (
//                   <Grid item xs={12} sm={6} md={4} key={index}>
//                     <Card 
//                       sx={{ 
//                         borderRadius: '10px',
//                         transition: 'transform 0.2s, box-shadow 0.2s',
//                         height: '200px',
//                         '&:hover': {
//                           transform: 'translateY(-5px)',
//                           boxShadow: '0 8px 24px rgba(35,63,75,0.3)',
//                           backgroundColor: 'rgb(232, 233, 235)'
//                         },
//                         border: '2.5px solid rgb(23, 106, 138)',
//                         position: 'relative'
//                       }}
//                       >
//                       <CardActionArea sx={{ height: '100%', p: 3 }}>
//                         <CardContent sx={{ 
//                           p: 0,
//                           display: 'flex',
//                           flexDirection: 'column',
//                           height: '100%',
//                           textAlign: 'left'
//                         }}>
//                           <Typography 
//                             variant="h5" 
//                             sx={{ 
//                               fontFamily: '"Montserrat", sans-serif',
//                               fontSize: '1.4rem',
//                               fontWeight: 600,
//                               mb: 1.5,
//                               color: 'rgb(30, 41, 59)'
//                             }}
//                           >
//                             {card.title}
//                           </Typography>
//                           <Typography 
//                             sx={{ 
//                               fontFamily: '"Montserrat", sans-serif',
//                               fontSize: '1rem',
//                               color: 'rgb(71, 85, 105)',
//                               lineHeight: 1.5,
//                               fontWeight: 300,
//                               mb: 2,
//                               flex: 1
//                             }}
//                           >
//                             {card.description}
//                           </Typography>
//                           <Button
//                             sx={{
//                               backgroundColor: 'rgb(30, 41, 59)',
//                               color: 'white',
//                               alignSelf: 'flex-end',
//                               '&:hover': {
//                                 backgroundColor: 'rgb(51, 65, 85)'
//                               },
//                               textTransform: 'none',
//                               px: 3,
//                               py: 1,
//                               borderRadius: '8px',
//                               fontSize: '0.95rem'
//                             }}
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleNavigation(card.path);
//                             }}
//                           >
//                             Go Now
//                           </Button>
//                         </CardContent>
//                       </CardActionArea>
//                       </Card>
//                   </Grid>
//                 ))}
//               </Grid>
//             </div>
//           </div>
//         </section>
//         <br />
//         <section className="faq__section" style={{ marginTop: '120px' }}>
//           <h1 className="title">FAQ'S</h1>
//           <div className="questions-container">
//             {faqData.map((faq, index) => (
//               <FAQItem key={index} question={faq.question} answer={faq.answer} />
//             ))}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Home;



import React from "react";
import { Grid } from "@mui/material";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Private Lessons",
      description: "Elite instruction tailored to your game",
      path: "/lessons",
      image: "lessons_image.png"
    },
    {
      title: "Tennis Clinics",
      description: "Group training with our master professionals",
      path: "/clinics",
      image: "clinic_img.png"
    },
    {
      title: "Junior Academy",
      description: "Developing tomorrow's champions",
      path: "/kids",
      image: "kids_clinic_img.png"
    },
    {
      title: "Court Reservations",
      description: "Premium courts for your perfect match",
      path: "/rentals",
      image: "BC_Complete_layout5.webp"
    },
    {
      title: "Membership",
      description: "Experience tennis at its finest",
      path: "/packages",
      image: "BC_Complete_layout3.webp"
    },
    {
      title: "Pro Shop Services",
      description: "Professional equipment and stringing",
      path: "/stringing",
      image: "Tennis_Racket.jpg"
    }
  ];

  return (
    <div className="home">
      <Header />
      
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1>BARTON CREEK TENNIS</h1>
          <p>Where Tradition Meets Excellence</p>
        </div>
      </motion.div>

      <main className="main-content">
        <section className="services-section">
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={service.title}>
                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(service.path)}
                >
                  <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}>
                    <div className="service-overlay" />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <button className="explore-button">Explore</button>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </section>

        <section className="experience-section">
          <div className="experience-content">
            <h2>THE BARTON CREEK EXPERIENCE</h2>
            <p>Discover a tennis legacy spanning over three decades. Our world-class facilities and dedicated professionals create an unparalleled environment for players of all levels.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;