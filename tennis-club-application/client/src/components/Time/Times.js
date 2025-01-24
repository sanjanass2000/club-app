import React, { useState } from 'react'
import './Times.css';

const times = ['08:00','09:00','10:00','14:00','15:00','17:00']

function Times(props) {
  const [selectedTime, setSelectedTime] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    phone: '',
    notes: ''
  });

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setShowBookingForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/coaches/3/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: props.date.toISOString().split('T')[0],
          startTime: selectedTime,
          name: bookingInfo.name,
          phone: bookingInfo.phone,
          notes: bookingInfo.notes,
          total_price: 90.00 // Adding default price
        }),
      });

      if (response.ok) {
        alert('Booking successful!');
        setShowBookingForm(false);
      } else {
        const errorData = await response.json();
        alert(`Failed to book appointment: ${errorData.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment. Please try again.');
    }
  };

  return (
    <div className="times">
      {times.map((time) => (
        <div key={time}>
          <button 
            className="time__button" 
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </button>
        </div>
      ))}

      {showBookingForm && (
        <div className="booking-modal">
          <div className="booking-modal-content">
            <h2>Book Appointment</h2>
            <p>Selected time: {selectedTime} on {props.date.toDateString()}</p>
            
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  required
                  value={bookingInfo.name}
                  onChange={(e) => setBookingInfo({...bookingInfo, name: e.target.value})}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  required
                  value={bookingInfo.phone}
                  onChange={(e) => setBookingInfo({...bookingInfo, phone: e.target.value})}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label>Additional Notes:</label>
                <textarea
                  value={bookingInfo.notes}
                  onChange={(e) => setBookingInfo({...bookingInfo, notes: e.target.value})}
                  className="form-input"
                />
              </div>

              <div className="button-group">
                <button type="submit" className="btn-book">
                  Confirm Booking
                </button>
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setShowBookingForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Times;