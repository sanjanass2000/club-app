import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";
import { coachApi } from '../services/api';

const About = () => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    loadCoaches();
  }, []);

  const loadCoaches = async () => {
    try {
      const data = await coachApi.getCoaches();
      setCoaches(data);
    } catch (error) {
      setCoaches([
        {
          id: 1,
          first_name: 'Monte',
          last_name: 'Williams',
          bio: 'USPTA Elite Professional'
        },
        {
          id: 2,
          first_name: 'Jorge',
          last_name: 'Margiotta',
          bio: 'USPTA Elite Professional'
        },
        {
          id: 3,
          first_name: 'Chandler',
          last_name: 'Harris',
          bio: 'USPTA Elite Professional'
        }
      ]);
    }
  };

  return (
    <div>
      <Header />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main className="main__about">
          <section className="first__section">
            <h1 className="heading">Our Legacy of Excellence</h1>
            <div className="about-content">
              <p>Nestled in the heart of Austin, Barton Creek Country Club has been a cornerstone 
                of tennis excellence for over three decades. Our world-class facilities and 
                dedicated professionals create an unparalleled tennis experience.</p>
              <p>From beginners to competitive players, we foster a community where tennis 
                enthusiasts can grow, compete, and enjoy the sport at every level.</p>
            </div>
          </section>

          <section className="team-section">
            <h2>Our Professional Team</h2>
            <div className="team-grid">
              {coaches.map((coach, index) => (
                <motion.div
                  key={coach.id}
                  className="team-member"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img 
                    src={`${coach.first_name.toLowerCase()}_${coach.last_name.toLowerCase()}.jpg`}
                    alt={`${coach.first_name} ${coach.last_name}`} 
                    className="member-image"
                  />
                  <h3>{coach.first_name} {coach.last_name}</h3>
                  <p>{coach.bio}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;