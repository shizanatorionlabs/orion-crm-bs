// import { getNotes, getNote, createNote, deleteNote } from '../db/database.js';
import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import cors from 'cors';

// // Other imports...

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Create an instance of the Express app
const app = express();
const port = process.env.PORT || 8080;
// const port = 8080;

// // Use middleware
// app.use(cors());
// app.use(express.static(path.join(__dirname, '../client/dist')));

// // API endpoint to fetch notes
// app.get('/api/notes', async (req, res) => {
//   try {
//     const notes = await getNotes(); // Assuming this function fetches notes from the database
//     res.json(notes);
//   } catch (error) {
//     console.error('Error fetching notes:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// // Catch-all route to serve the single-page application
app.get('/', (req, res) => {
  res.end('Hllo')
  // res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// // Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
