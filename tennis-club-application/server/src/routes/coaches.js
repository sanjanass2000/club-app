const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

router.post('/:id/bookings', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { id } = req.params;
    const { date, startTime, name, phone, notes, total_price } = req.body;
    
    const endTime = startTime.split(':')[0] + ':59';
    
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
    
    const insertQuery = `
      INSERT INTO bookings (
        coach_id, booking_date, start_time, end_time,
        client_name, client_phone, notes, status, total_price, is_member
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, 'confirmed', $8, false)
      RETURNING *
    `;
    
    const { rows: [booking] } = await client.query(insertQuery, [
      id, date, startTime, endTime, name, phone, notes || '', total_price
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