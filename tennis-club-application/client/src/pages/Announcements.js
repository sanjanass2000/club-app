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