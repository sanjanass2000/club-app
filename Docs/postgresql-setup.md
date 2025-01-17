# PostgreSQL Setup Guide for Tennis Club Application

## 1. Install PostgreSQL
```bash
# Update package list
sudo apt update

# Install PostgreSQL and contrib package
sudo apt install postgresql postgresql-contrib
```

## 2. Verify Installation
```bash
# Check PostgreSQL version
psql --version

# Check service status
sudo service postgresql status
```

## 3. Initial Setup
```bash
# Start PostgreSQL service if not running
sudo service postgresql start

# Access PostgreSQL prompt as postgres user
sudo -u postgres psql
```

## 4. Create Database and Configure User
```sql
-- In PostgreSQL prompt:
CREATE DATABASE tennis_club;
\c tennis_club;
ALTER USER postgres WITH PASSWORD 'tennis_club123';
```

## 5. Project Setup
```bash
# Clone the repository
git clone [repository-url]
cd club-app

# Install dependencies
npm install

# Create .env file
```

## 6. Configure Environment
Create `.env` file with the following content:
```env
DB_USER=postgres
DB_PASSWORD=tennis_club123
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tennis_club
PORT=5001
```

## 7. Database Schema and Test Data
Run the following SQL commands in your PostgreSQL prompt:

```sql
-- Create ENUM type for session status
CREATE TYPE session_status AS ENUM ('scheduled', 'in_progress', 'completed');

-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role user_role DEFAULT 'student',
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create instructors table with test data
CREATE TABLE instructors (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    bio TEXT,
    hourly_rate DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert test users and instructors
INSERT INTO users (email, password_hash, first_name, last_name, role)
VALUES ('test@example.com', 'hashedpassword', 'Test', 'Instructor', 'instructor');

-- Insert test classes
INSERT INTO classes VALUES 
('Advanced Technique', 'Advanced stroke and strategy training'),
('Kids Group Class', 'Fun tennis basics for children');

-- Insert test sessions (for next 7 days)
-- The actual session insertion script is in your database-scripts/test-data-insertion-script

-- Insert test bookings
INSERT INTO bookings (user_id, session_id, status)
VALUES 
((SELECT id FROM users WHERE email = 'student1@tennis.com'),
(SELECT id FROM sessions LIMIT 3),
'confirmed');

-- Insert instructor availability
INSERT INTO instructor_availability (instructor_id, day_of_week, start_time, end_time)
VALUES
(1, 1, '09:00', '17:00');
```

## 8. Pages Available in Application
Your application includes the following pages:
- Announcements
- Clinics
- Contact
- Home
- Kids
- Lessons_Booking
- Lessons
- Packages
- Rentals
- Stringing

## 9. Verify Setup
```sql
-- List all tables
\dt

-- Verify data
SELECT * FROM users;
SELECT * FROM instructors;
SELECT * FROM classes;
SELECT * FROM sessions;
```

## 10. Common PostgreSQL Commands
```sql
\l                 -- List all databases
\c database_name   -- Connect to database
\dt               -- List all tables
\d table_name     -- Describe table
\q                -- Quit psql
```

## 11. Troubleshooting

If connection fails:
```bash
# Check if service is running
sudo service postgresql status

# Restart service if needed
sudo service postgresql restart
```

If permission denied:
```bash
# Access as postgres user
sudo -u postgres psql
```
Note: Make sure to run the migration script located under the database-scripts dir before starting the application.


## 12. Start Development Server
```bash
npm run dev
```

The server should now be running at http://localhost:5001

