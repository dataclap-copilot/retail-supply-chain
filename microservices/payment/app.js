const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from payment service!'));
app.listen(3000, () => console.log('payment service running on port 3000'));
