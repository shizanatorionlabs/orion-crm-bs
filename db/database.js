import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
}).promise();

// Get Notes
export async function getNotes() {
    const [rows] = await pool.query('SELECT * FROM notes');
    return rows;
}

// Get Note
export async function getNote(id) {
    const [rows] = await pool.query(`
        SELECT *
        FROM notes
        WHERE id = ?
    `, [id])
    return rows
}

// Create Note
export async function createNote(title, contents){
    const result = await pool.query(`
        INSERT INTO notes (title, contents)
        VALUES (?, ?)
    `, [title, contents])
    return result
}

// Delete Note
export async function deleteNote(){
    const result = await pool.query(`Delete from notes`, [])
    return result
}

