// import React from "react"
// import Header from '../components/Header';
// import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
// import Footer from "../components/Footer";

// function KidsPage() {
//   return (
//     <div>
//       <Header />
//       <main class = "main__kids">
//         <section class ="first__section">
//         <h1 class = "heading">Welcome to Barton Creek Junior Tennis Academy</h1>
//         <Grid container spacing={4}>
//         {/* First Card */}
//         {/* <Grid item xs={4}>
//           <Card classname="Card" sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="lessons_image.png"
//                 alt="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Lessons
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Private lessons are available for players of all skill levels
//                   with our incredible tennis pros.
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button variant="outlined">Book Lesson</Button>
//             </CardActions>
//           </Card>
//         </Grid>

//         {/* Second Card *
//         <Grid item xs={4}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="clinic_img.png"
//                 alt="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Adult Clinics
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   We offer tennis clinics for a nominal fee with our incredible
//                   tennis pros.
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button variant="outlined">Book Clinic</Button>
//             </CardActions>
//           </Card>
//         </Grid>

//         {/* Third Card *
//         <Grid item xs={4}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="kids_clinic_img.png"
//                 alt="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Junior Tennis Academy
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Register for one of our exciting kids clinics. Our tennis pros are dedicated.
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//             <CardActions>
//               <Button onClick={handleButtonClick} variant="outlined">Register</Button>
//             </CardActions>
//           </Card>
//         </Grid> */}
//         <Grid item xs={4}>
//           <button class = "button">
//             <p class = "firstp"><a href="/lessons">Lessons</a></p>
//             <p class ="secondp">Book lessons with our amazing pros.</p>
//             <p class = "thirdp">Book Lesson</p>
//           </button>
//         </Grid>
//         <Grid item xs={4}>
//           <button class = "button">
//             <p class = "firstp"><a href="/clinics">Clinics</a></p>
//             <p class ="secondp">Book lessons with our amazing pros.</p>
//             <p class = "thirdp">Book Clinic</p>
//           </button>
//         </Grid>
//         <Grid item xs={4}>
//           <button class = "button">
//             <p class = "firstp"><a href="/kids">Kids</a></p>
//             <p class ="secondp">Book lessons with our amazing pros.</p>
//             <p class = "thirdp">Register for Kids Clinic</p>
//           </button>
//         </Grid>
//         <Grid item xs={4}>
//           <button class = "button">
//             <p class = "firstp"><a href="/rentals">Rentals</a></p>
//             <p class ="secondp">Book lessons with our amazing pros.</p>
//             <p class = "thirdp">Rent</p>
//           </button>
//         </Grid>
//         <Grid item xs={4}>
//           <button class = "button">
//             <p class = "firstp"><a href="/packages">Packages</a></p>
//             <p class ="secondp">Book lessons with our amazing pros.</p>
//             <p class = "thirdp">Book Package</p>
//           </button>
//         </Grid>
//         <Grid item xs={4}>
//           <button class = "button">
//             <p class = "firstp"><a href="/stringing">Stringing</a></p>
//             <p class ="secondp">Book lessons with our amazing pros.</p>
//             <p class = "thirdp">Book Event</p>
//           </button>
//         </Grid>
//       </Grid>
//         </section>
//       <br></br>
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
//       <p>
      

//       Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it. Style and length are technically two different things.

//         Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don have time to compose letters and post them anymuch less pay postage, what with all the banks kinda-sorta losing our money these daysso we blast a few emails. We dot have time to talk, so we text. We dont have time to text to specific people, so we update our Facebook status. We don have time to write essays, so we blog.

// Im less interested by the superficial reduction of wordsi.e. the always charming imho or c u l8rthan the genres in which those communications occur: blogs, texts, tweets, emails. All these interstitial communiques, do they really reflect super brevity that would make Twain proud? Or do they just reflect poorly stylized writing that desperately seeks a clearer form?

// I rather think the latter. Clive Thompson wrote last month in the NYT Magazine that constant digital updates, after a day, can begin “to feel like a short story; follow it for a month, and its a novel.” He was right to see the bits as part of a larger whole. The words now flying through our digital pipes & ether more or less tend to resemble parts of bigger units, perhaps even familiar genres. But stories and novels have definite conclusions; they also have conventional lengths. Quick, how long is the conventional blog, when you add up all of its posts and comments? How long is the longest email thread you send back and forth on a single topic?

// Most important: What exactly are we writing when were doing all of this writing? I wont pretend to coin a whole new term here; I still think the best we can muster is a more fitting analogue. And if we must find an analogue in an existing literary unit, I propose the paragraph. Our constant writing has begun to feel like a neverending d
// Lately, Ive been noticing how my sentences have a tendency to keep going when I write them onscreen. This goes for concentrated writing as well as correspondence. Twain probably believed that correspondence, in an ideal world, also demands concentration. But he never used email. Last week I caught myself packing four conjunctions into a three-line sentence in an email. Thats inexcusable. Since then, I have tried to eschew conjunctions whenever possible. Gone are the commas, the ands, buts, and sos; in are staccato declaratives. Better to read like bad Hemingway than bad Faulkner.

//       Lengthas we all know, and for lack of a more original or effective way of saying itmatters. But (ahem), its also a matter of how you use it. Style and length are technically two different things.

//         Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don have time to compose letters and post them anymuch less pay postage, what with all the banks kinda-sorta losing our money these daysso we blast a few emails. We dot have time to talk, so we text. We dont have time to text to specific people, so we update our Facebook status. We don have time to write essays, so we blog.

// Im less interested by the superficial reduction of wordsi.e. the always charming imho or c u l8rthan the genres in which those communications occur: blogs, texts, tweets, emails. All these interstitial communiques, do they really reflect super brevity that would make Twain proud? Or do they just reflect poorly stylized writing that desperately seeks a clearer form?

// I rather think the latter. Clive Thompson wrote last month in the NYT Magazine that constant digital updates, after a day, can begin “to feel like a short story; follow it for a month, and its a novel.” He was right to see the bits as part of a larger whole. The words now flying through our digital pipes & ether more or less tend to resemble parts of bigger units, perhaps even familiar genres. But stories and novels have definite conclusions; they also have conventional lengths. Quick, how long is the conventional blog, when you add up all of its posts and comments? How long is the longest email thread you send back and forth on a single topic?

// Most important: What exactly are we writing when were doing all of this writing? I wont pretend to coin a whole new term here; I still think the best we can muster is a more fitting analogue. And if we must find an analogue in an existing literary unit, I propose the paragraph. Our constant writing has begun to feel like a neverending d
//       </p>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default KidsPage;





import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function KidsPage() {
  const navigate = useNavigate();

  const programs = [
    {
      title: "Rippers: Ages 4-6",
      time: "4:00 - 5:00 PM",
      days: "Monday & Wednesday",
      memberPrice: "$225/Month",
      guestPrice: "$300/Month",
      link: "/register/rippers",
    },
    {
      title: "Ralliers: Ages 6-8",
      time: "4:00 - 5:00 PM",
      days: "Monday & Wednesday",
      memberPrice: "$225/Month",
      guestPrice: "$300/Month",
      link: "/register/ralliers",
    },
    {
      title: "Challengers: Ages 8-10",
      time: "4:00 - 5:30 PM",
      days: "Tuesday & Thursday",
      memberPrice: "$325/Month",
      guestPrice: "$400/Month",
      link: "/register/challengers",
    },
    {
      title: "Champions: Ages 10-12",
      time: "5:00 - 6:30 PM",
      days: "Monday & Wednesday",
      memberPrice: "$350/Month",
      guestPrice: "$425/Month",
      link: "/register/champions",
    },
    {
      title: "Teen Clinic: Ages 13+",
      time: "5:00 - 6:30 PM",
      days: "Monday & Wednesday",
      memberPrice: "$350/Month",
      guestPrice: "$425/Month",
      link: "/register/teen-clinic",
    },
    {
      title: "Tournament Team: Ages 10+",
      time: "4:00 - 5:00 PM",
      days: "Monday & Wednesday",
      memberPrice: "$225/Month",
      guestPrice: "$300/Month",
      link: "/kids_registration",
    },
  ];

  return (
    <div>
      <Header />
      <main style={{ backgroundColor: "#fff", padding: "2rem" }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          style={{ marginBottom: "2rem", fontWeight: "bold" }}
        >
          Welcome to Barton Creek Junior Tennis Academy
        </Typography>
        <Grid container spacing={4}>
          {programs.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Typography variant="h5" style={{ fontWeight: "bold" }}>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" style={{ margin: "0.5rem 0" }}>
                    {program.time}
                  </Typography>
                  <Typography variant="body2">{program.days}</Typography>
                  <Typography
                    variant="body2"
                    style={{ marginTop: "0.5rem", fontWeight: "bold" }}
                  >
                    Member: {program.memberPrice}
                  </Typography>
                  <Typography variant="body2">
                    Guest of Member: {program.guestPrice}
                  </Typography>
                </CardContent>
                <Button
                  onClick={() => navigate(program.link)}
                  variant="contained"
                  style={{
                    backgroundColor: "#34c759",
                    color: "#fff",
                    margin: "1rem",
                  }}
                >
                  Register Now
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      <Footer />
    </div>
  );
}

export default KidsPage;
