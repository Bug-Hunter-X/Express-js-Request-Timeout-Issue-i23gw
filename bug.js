const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the request takes too long to process
  // The default timeout for many systems is around 60 seconds
  // This can manifest as a 504 Gateway Timeout in the client
  // or a 'ECONNRESET' error in the server logs
  const start = new Date().getTime();
  let timeoutId = setTimeout(() => {
    console.log('Request timed out');
    res.status(504).send('Request timed out');
  }, 10000); // 10 seconds

  setTimeout(() => {
    clearTimeout(timeoutId);
    console.log('Request processed successfully');
    res.send('Hello World!');
  }, 11000); // 11 seconds
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});