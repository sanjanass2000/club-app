// import React from "react";
// import { useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const RegistrationForm = () => {
//   const location = useLocation();
//   const { programName } = location.state || { programName: "____ Program" };

//   return (
//     <div>
//       <Header />
//       <main style={{ padding: "2rem" }}>
//         <h1>Register for {programName}</h1>
//         <form style={{ maxWidth: "500px", margin: "0 auto" }}>
//           <label style={{ display: "block", marginBottom: "1rem" }}>
//             Name:
//             <input type="text" name="name" style={{ width: "100%", padding: "0.5rem" }} />
//           </label>
//           <label style={{ display: "block", marginBottom: "1rem" }}>
//             Email:
//             <input type="email" name="email" style={{ width: "100%", padding: "0.5rem" }} />
//           </label>
//           <label style={{ display: "block", marginBottom: "1rem" }}>
//             Phone Number:
//             <input type="text" name="phone" style={{ width: "100%", padding: "0.5rem" }} />
//           </label>
//           <button
//             type="submit"
//             style={{
//               backgroundColor: "#34c759",
//               color: "white",
//               padding: "0.5rem 1rem",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Submit
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default RegistrationForm;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Grid, TextField, Checkbox, Button, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const KidsRegistrationPage = () => {
  const location = useLocation();
  const { programName } = location.state || { programName: "____ Program" };
  const [kidsName, setKidsName] = useState("");
  const [kidsDOB, setKidsDOB] = useState("");
  const [attendingDays, setAttendingDays] = useState([]);
  const [parentName, setParentName] = useState("");
  const [parentCell, setParentCell] = useState("");
  const [parentHome, setParentHome] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentSignature, setParentSignature] = useState("");

  const handleDayChange = (day) => {
    if (attendingDays.includes(day)) {
      setAttendingDays(attendingDays.filter((d) => d !== day));
    } else {
      setAttendingDays([...attendingDays, day]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Header />
      <main style={{ backgroundColor: "#f1f1f1", padding: "2rem" }}>
        <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: "bold" }}>
          Register for {programName}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Kids Name"
                value={kidsName}
                onChange={(e) => setKidsName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Kids Date of Birth"
                value={kidsDOB}
                onChange={(e) => setKidsDOB(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Days Attending:
              </Typography>
              <Grid container spacing={2}>
                <Grid item>
                  <Checkbox
                    checked={attendingDays.includes("Monday")}
                    onChange={() => handleDayChange("Monday")}
                  />
                  Monday
                </Grid>
                <Grid item>
                  <Checkbox
                    checked={attendingDays.includes("Tuesday")}
                    onChange={() => handleDayChange("Tuesday")}
                  />
                  Tuesday
                </Grid>
                <Grid item>
                  <Checkbox
                    checked={attendingDays.includes("Wednesday")}
                    onChange={() => handleDayChange("Wednesday")}
                  />
                  Wednesday
                </Grid>
                <Grid item>
                  <Checkbox
                    checked={attendingDays.includes("Thursday")}
                    onChange={() => handleDayChange("Thursday")}
                  />
                  Thursday
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Parent Name"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Parent Cell Phone"
                value={parentCell}
                onChange={(e) => setParentCell(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Parent Home Phone"
                value={parentHome}
                onChange={(e) => setParentHome(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Parent Email"
                value={parentEmail}
                onChange={(e) => setParentEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Parent Signature"
                value={parentSignature}
                onChange={(e) => setParentSignature(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" style={{ backgroundColor: "#34c759", color: "#fff" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default KidsRegistrationPage;
