// db.js
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Create MySQL connection
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: { rejectUnauthorized: true } // Required for Railway & Azure secure connections
});

try {
  const [rows] = await connection.execute("SELECT 1 + 1 AS result");
  console.log("✅ MySQL connected successfully! Test result:", rows[0].result);
} catch (err) {
  console.error("❌ Failed to connect to MySQL:", err);
}

export default connection;
