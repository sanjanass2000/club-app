import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Announcements.css";

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [announcements] = useState([
    {
      id: 1,
      title: "Holiday Hours",
      date: "December 24, 2023",
      content: "The tennis center will have modified hours during the holidays."
    },
    {
      id: 2,
      title: "Junior Tennis Camp",
      date: "January 15, 2024",
      content: "Registration now open for spring break tennis camps."
    },
    {
      id: 3,
      title: "Court Maintenance",
      date: "February 1, 2024",
      content: "Courts 5-8 will be undergoing resurfacing next month."
    },
    {
      id: 4,
      title: "New Pickleball Courts",
      date: "February 16, 2024",
      content: "We have begun building some more pickleball courts! More announcements on the way."
    },
    {
      id: 5,
      title: "Inclement Weather",
      date: "January 20, 2024",
      content: "Snow is expected to fall Tuesday and we will thus be cancelling all tennis operations tomorrow."
    },
    {
      id: 6,
      title: "Court Maintenance",
      date: "March 11, 2024",
      content: "Courts 1-4 will be undergoing resurfacing next month."
    },
    {
      id: 7,
      title: "New Rackets in Stock!",
      date: "July 6, 2024",
      content: "The new Head Gravity Rackets will be in stock soon. Keep an eye out for them."
    },
    {
      id: 8,
      title: "Inclement Weather",
      date: "August 19, 2024",
      content: "Heavy rain today has not allowed for tennis operations to take place and will be cancelling today."
    },
    {
      id: 9,
      title: "Court Maintenance",
      date: "August 30, 2024",
      content: "Courts 9-10 will be undergoing resurfacing this week."
    },
    {
      id: 10,
      title: "Holiday Hours",
      date: "October 30, 2024",
      content: "Halloween."
    }
  ]);

  const filteredAnnouncements = announcements.filter(announcement =>
    announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    announcement.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <main className="main__announcements">
        <section className="first__section">
          <h1 className="heading">Latest Announcements</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="announcements-grid">
            {filteredAnnouncements.map((announcement, index) => (
              <motion.div
                key={announcement.id}
                className="announcement-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="announcement-title">{announcement.title}</h3>
                <div className="announcement-date">{announcement.date}</div>
                <p className="announcement-content">{announcement.content}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Announcements;