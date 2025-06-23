const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from product service!'));
app.listen(3000, () => console.log('product service running on port 3000'));
