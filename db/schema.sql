-- Create the 'notes_app' database
CREATE DATABASE IF NOT EXISTS notes_app;

-- Use the 'notes_app' database
USE notes_app;

-- Create the 'notes' table
CREATE TABLE IF NOT EXISTS notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    contents TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample notes
INSERT INTO
    notes (title, contents)
VALUES
    ('Note 1', 'This is the content of Note 1.'),
    ('Note 2', 'Content for Note 2 goes here.'),
    ('Important Note', 'Don\'t forget about the important stuff!');