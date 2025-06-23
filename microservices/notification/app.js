const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from notification service!'));
app.listen(3000, () => console.log('notification service running on port 3000'));
