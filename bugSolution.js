const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Set a longer timeout to accommodate long-running requests
  req.setTimeout(15000); // 15 seconds
  const start = new Date().getTime();
  setTimeout(() => {
    console.log('Request processed successfully');
    res.send('Hello World!');
  }, 11000); // 11 seconds
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});