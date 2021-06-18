const express = require('express');
const app = express();

// Responder styles, script
app.use('/', express.static(`${__dirname}/public`))

app.listen(4001, () => {
  console.log('Server running on port 4001');
});

