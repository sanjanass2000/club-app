import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RegistrationForm = () => {
  const location = useLocation();
  const { programName } = location.state || { programName: "____ Program" };

  return (
    <div>
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1>Register for {programName}</h1>
        <form style={{ maxWidth: "500px", margin: "0 auto" }}>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Name:
            <input type="text" name="name" style={{ width: "100%", padding: "0.5rem" }} />
          </label>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Email:
            <input type="email" name="email" style={{ width: "100%", padding: "0.5rem" }} />
          </label>
          <label style={{ display: "block", marginBottom: "1rem" }}>
            Phone Number:
            <input type="text" name="phone" style={{ width: "100%", padding: "0.5rem" }} />
          </label>
          <button
            type="submit"
            style={{
              backgroundColor: "#34c759",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default RegistrationForm;
