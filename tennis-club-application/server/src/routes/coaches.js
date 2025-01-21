// server/src/routes/coaches.js
const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

// Create new booking
router.post('/:id/bookings', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { id } = req.params;
    const { date, startTime, name, phone, notes, isMember } = req.body;
    
    // Convert startTime (e.g., "10:00") to proper time format
    const endTime = startTime.split(':')[0] + ':59'; // Assume 1-hour slots
    
    // Check if slot is already booked
    const conflictQuery = `
      SELECT COUNT(*) 
      FROM bookings 
      WHERE coach_id = $1 
      AND booking_date = $2 
      AND start_time = $3
    `;
    
    const { rows: [{ count }] } = await client.query(conflictQuery, [
      id, date, startTime
    ]);
    
    if (count > 0) {
      throw new Error('Time slot already booked');
    }
    
    // Create booking
    const insertQuery = `
      INSERT INTO bookings (
        coach_id, booking_date, start_time, end_time,
        client_name, client_phone, notes, status, is_member
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, 'confirmed', $8)
      RETURNING *
    `;
    
    const { rows: [booking] } = await client.query(insertQuery, [
      id, date, startTime, endTime, name, phone, notes, isMember || false // Default to false if not provided
    ]);
    
    await client.query('COMMIT');
    res.status(201).json(booking);
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

module.exports = router;