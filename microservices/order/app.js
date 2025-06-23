const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from order service!'));
app.listen(3000, () => console.log('order service running on port 3000'));
