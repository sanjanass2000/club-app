// src/services/api.js

const API_BASE_URL = 'http://localhost:3001/api';

export const coachApi = {
  // Get all coaches
  getCoaches: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/coaches`);
      if (!response.ok) throw new Error('Failed to fetch coaches');
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // Get coach availability
  getAvailability: async (coachId, date) => {
    try {
      const formattedDate = date.toISOString().split('T')[0];
      const response = await fetch(
        `${API_BASE_URL}/coaches/${coachId}/availability?date=${formattedDate}`
      );
      if (!response.ok) throw new Error('Failed to fetch availability');
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },

  // Create booking
  createBooking: async (coachId, bookingData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/coaches/${coachId}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
      if (!response.ok) throw new Error('Failed to create booking');
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};