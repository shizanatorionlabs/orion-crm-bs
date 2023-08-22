import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.end('Wassup');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
