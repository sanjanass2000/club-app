// routes/clinics.js
const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

// Get all clinic types
router.get('/types', async (req, res) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM clinic_types');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});

// // Get clinic schedule with spots remaining
// router.get('/schedule', async (req, res) => {
//   const client = await pool.connect();
//   try {
//     const query = `
//       SELECT cs.*, ct.name, ct.description, ct.max_participants,
//       (ct.max_participants - COUNT(b.id)) as spots_remaining
//       FROM clinic_schedule cs
//       JOIN clinic_types ct ON cs.clinic_type_id = ct.id
//       LEFT JOIN bookings b ON cs.id = b.clinic_id
//       WHERE cs.date >= CURRENT_DATE
//       GROUP BY cs.id, ct.id
//       ORDER BY cs.date, cs.start_time
//     `;
//     const { rows } = await client.query(query);
//     res.json(rows);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   } finally {
//     client.release();
//   }
// });


// Get clinic schedule with spots remaining
router.get('/schedule', async (req, res) => {
    const client = await pool.connect();
    try {
      const query = `
            SELECT cs.*, ct.name, ct.description, ct.capacity
            FROM clinic_schedule cs
            JOIN clinic_types ct ON cs.clinic_type_id = ct.id
            WHERE cs.day_of_week >= 0 AND cs.day_of_week <= 6
            ORDER BY cs.day_of_week, cs.start_time
      `;
      const { rows } = await client.query(query);
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      client.release();
    }
  });
  

// Book clinic spot
router.post('/book', async (req, res) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const { clinic_schedule_id, name, phone, notes } = req.body;
    
    // Check spots remaining
    const spotsQuery = `
      SELECT ct.max_participants - COUNT(b.id) as spots_remaining
      FROM clinic_schedule cs
      JOIN clinic_types ct ON cs.clinic_type_id = ct.id
      LEFT JOIN bookings b ON cs.id = b.clinic_schedule_id
      WHERE cs.id = $1
      GROUP BY ct.max_participants
    `;
    
    const { rows: [{ spots_remaining }] } = await client.query(spotsQuery, [clinic_schedule_id]);
    
    if (spots_remaining <= 0) {
      throw new Error('No spots remaining in this clinic');
    }
    
    const insertQuery = `
      INSERT INTO bookings (
        clinic_schedule_id, client_name, client_phone, 
        notes, status
      )
      VALUES ($1, $2, $3, $4, 'confirmed')
      RETURNING *
    `;
    
    const { rows: [booking] } = await client.query(insertQuery, [
      clinic_schedule_id, name, phone, notes || ''
    ]);
    
    await client.query('COMMIT');
    res.status(201).json(booking);
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
});


// Add to clinics.js
// router.get('/bookings', async (req, res) => {
//     const client = await pool.connect();
//     try {
//       const query = `
//         SELECT b.*, cs.start_time, cs.end_time, ct.name as clinic_name 
//         FROM bookings b
//         JOIN clinic_schedule cs ON b.clinic_schedule_id = cs.id
//         JOIN clinic_types ct ON cs.clinic_type_id = ct.id;
//       `;
//       const { rows } = await client.query(query);
//       res.json(rows);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     } finally {
//       client.release();
//     }
//   });

router.get('/bookings', async (req, res) => {
    const client = await pool.connect();
    try {
      const { rows } = await client.query('SELECT * FROM bookings');
      res.json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      client.release();
    }
  });

module.exports = router;