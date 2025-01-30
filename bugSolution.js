const express = require('express');
const app = express();
app.use((req, res, next) => {
  res.setTimeout(10000, () => {
    console.error('Request timed out');
    res.status(504).send('Request Timeout');
  });
  next();
});
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});