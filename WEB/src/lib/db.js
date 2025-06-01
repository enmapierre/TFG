// src/lib/db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'WWww1234',
  database: 'mibasededatos',
  timezone: 'Z', // equivale a serverTimezone=UTC
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
