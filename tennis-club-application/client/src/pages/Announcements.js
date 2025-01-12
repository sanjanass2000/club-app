import React from "react";
import Header from '../components/Header';
import Footer from "../components/Footer";

const AnnouncementsPage = () => {
  const announcements = [
    {
      title: "This is an announcement",
      body: "This is the body of the announcement",
    },
    {
      title: "This is another announcement",
      body: "This is the the other announcement",
    },
    {
        title: "This is the third announcement",
        body: "This is the the other announcement",
    },
    {
        title: "This is the fourth announcement",
        body: "This is the the other announcement",
    },
  ];

  return (
    <div>
        <Header />
        <main class = "main__announcements">
            <div class= "profile-area">
            <h1>Announcements</h1>

            {announcements.map((announcement) => (
                <div key={announcement.id} class = "announcement-card">
                <h2>{announcement.title}</h2>
                <p>{announcement.body}</p>
                </div>
            ))}

            </div>
        </main>
        <Footer />
    </div>
  );
};

export default AnnouncementsPage;
