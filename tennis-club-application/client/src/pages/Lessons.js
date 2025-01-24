import React, { useState, useEffect } from "react"
import Header from '../components/Header';
import Footer from "../components/Footer";
import { coachApi } from '../services/api';

function LessonsPage() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    loadCoaches();
  }, []);

  const loadCoaches = async () => {
    try {
      const data = await coachApi.getCoaches();
      setCoaches(data);
    } catch (error) {
      console.error('Error loading coaches:', error);
      // If API fails, use default coaches
      setCoaches([
        {
          id: 1,
          first_name: 'Monte',
          last_name: 'Williams',
          bio: 'USPTA Elite Professional with over 15 years of teaching experience.'
        },
        {
          id: 2,
          first_name: 'Jorge',
          last_name: 'Margiotta',
          bio: 'Former ATP tour player specializing in advanced technique and strategy.'
        },
        {
          id: 3,
          first_name: 'Chandler',
          last_name: 'Harris',
          bio: 'Top Junior Tennis Professional with a focus in player development.'
        }
      ]);
    }
  };

  return (
    <div>
      <Header />
      <main className="main__lessons">
        <section className="first__section">
          <h1 className="heading">Book with our Pros!</h1>
          <div className="profile-area">
            <div className="container">
              <div className="row">
                {coaches.map((coach) => (
                  <div key={coach.id} className="col-md-4">
                    <div className="card">
                      <div className="img1">
                        <img src="barton-hills.jpg" alt="" />
                      </div>
                      <div className="img2">
                        <img 
                          src={`${coach.first_name.toLowerCase()}_${coach.last_name.toLowerCase()}.jpg`}
                          alt={`${coach.first_name} ${coach.last_name}`} 
                        />
                      </div>
                      <div className="main-text">
                        <h2>{coach.first_name} {coach.last_name}</h2>
                        <p>{coach.bio}</p>
                      </div>
                      <div className="book-button">
                        <button type="button" className="btn btn-light">
                          <a href={`/lessons_booking?coach=${coach.id}`}>Book Now</a>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default LessonsPage;