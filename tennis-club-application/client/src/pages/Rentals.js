import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/Rentals.css";

const RentalsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [ballMachine, setBallMachine] = useState(false);

  const courts = {
    'Court 1': { available: true },
    'Court 2': { available: true },
    'Court 3': { available: true },
    'Court 4': { available: true },
    'Court 5': { available: true },
    'Court 6': { available: true },
    'Court 7': { available: true },
    'Court 8': { available: true },
  };

  const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  const getWeekDates = (date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  };

  const changeWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
  };

  const handleReservation = (court, time) => {
    setSelectedCourt({ court, time });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission
    setShowForm(false);
    setSelectedCourt(null);
    setBallMachine(false);
  };

  return (
    <div>
      <Header />
      <main className="main__rentals">
        <section className="first__section">
          <h1 className="heading">Court Reservations</h1>
          
          <div className="rentals-container">
            <div className="week-navigation">
              <button className="btn-nav" onClick={() => changeWeek(-1)}>← Previous Week</button>
              <h2>{getWeekDates(currentDate)}</h2>
              <button className="btn-nav" onClick={() => changeWeek(1)}>Next Week →</button>
            </div>

            <div className="courts-grid">
              <div className="time-column">
                <div className="court-header">Time</div>
                {timeSlots.map(time => (
                  <div key={time} className="time-slot">{time}</div>
                ))}
              </div>
              
              {Object.entries(courts).map(([courtName]) => (
                <div key={courtName} className="court-column">
                  <div className="court-header">{courtName}</div>
                  {timeSlots.map(time => (
                    <div 
                      key={`${courtName}-${time}`}
                      className="court-slot"
                      onClick={() => handleReservation(courtName, time)}
                    >
                      Available
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {showForm && (
              <div className="modal-overlay">
                <div className="reservation-form">
                  <h3>Reserve {selectedCourt.court}</h3>
                  <p>Time: {selectedCourt.time}</p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>
                        <input 
                          type="checkbox" 
                          checked={ballMachine}
                          onChange={(e) => setBallMachine(e.target.checked)}
                        />
                        Add Ball Machine ($15)
                      </label>
                    </div>
                    <div className="form-buttons">
                      <button type="submit" className="btn-submit">Confirm Reservation</button>
                      <button 
                        type="button" 
                        className="btn-cancel"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RentalsPage;