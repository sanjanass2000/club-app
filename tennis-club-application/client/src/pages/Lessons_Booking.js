import React, { useState, useEffect } from "react"
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Calendar from 'react-calendar';
import Time from "../components/Time/Time";
import { coachApi } from '../services/api';

function Lessons_BookingPage() {
  const [searchParams] = useSearchParams();
  const coachId = searchParams.get('coach');
  
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  const [coach, setCoach] = useState(null);
  const [bookingInfo, setBookingInfo] = useState({
    showForm: false,
    selectedTime: null,
    name: '',
    isMember: false,
    notes: ''
  });

  useEffect(() => {
    if (coachId) {
      loadCoachDetails();
    }
  }, [coachId]);

  const loadCoachDetails = async () => {
    try {
      const data = await coachApi.getCoaches();
      const selectedCoach = data.find(c => c.id === parseInt(coachId));
      setCoach(selectedCoach);
    } catch (error) {
      console.error('Error loading coach:', error);
      // Fallback to default data if API fails
      setCoach({
        first_name: 'Chandler',
        last_name: 'Harris'
      });
    }
  };

  const handleTimeSelect = async (time) => {
    setBookingInfo({
      ...bookingInfo,
      showForm: true,
      selectedTime: time
    });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      await coachApi.createBooking(coachId, {
        date: date.toISOString().split('T')[0],
        startTime: bookingInfo.selectedTime,
        endTime: bookingInfo.selectedTime + 1,
        name: bookingInfo.name,
        isMember: bookingInfo.isMember,
        notes: bookingInfo.notes
      });
      alert('Booking successful!');
      window.location.href = '/lessons';
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <main className="main__lessons__booking">
        <section className="first__section">
          <div className="lessons__booking">
            <h1 className="heading">
              {coach ? `${coach.first_name}'s Lesson Availability` : 'Loading...'}
            </h1>
            <p>Available slots shown in military time</p>
            
            {!bookingInfo.showForm ? (
              <div className="calendar__times__container">
                <div className="calendar__container">
                  <Calendar 
                    onChange={setDate} 
                    value={date} 
                    onClickDay={() => setShowTime(true)}
                    minDate={new Date()}
                  />
                </div>

                {showTime && (
                  <div className="time__container">
                    <Time 
                      showTime={showTime} 
                      date={date}
                      onTimeSelect={handleTimeSelect}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="booking-form">
                <form onSubmit={handleBookingSubmit} className="login-box">
                  <div className="user-box">
                    <input
                      type="text"
                      required
                      value={bookingInfo.name}
                      onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
                    />
                    <label>Name</label>
                  </div>

                  <div className="user-box">
                    <label>
                      <input
                        type="checkbox"
                        checked={bookingInfo.isMember}
                        onChange={(e) => setBookingInfo({...bookingInfo, isMember: e.target.checked})}
                      />
                      I am a member
                    </label>
                  </div>

                  <div className="user-box">
                    <textarea
                      value={bookingInfo.notes}
                      onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
                      placeholder="Any notes for the coach?"
                    />
                  </div>

                  <div className="book-button">
                    <button type="submit" className="btn btn-light">Confirm Booking</button>
                    <button 
                      type="button" 
                      className="btn btn-light"
                      onClick={() => setBookingInfo({...bookingInfo, showForm: false})}
                    >
                      Back
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Lessons_BookingPage;