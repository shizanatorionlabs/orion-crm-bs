import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.end('Wassup');
  // You might want to use res.sendFile here if you want to serve an HTML file
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
