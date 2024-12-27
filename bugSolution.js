const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is missing');
  }
  const user = req.body;
  // Validate user data
  if (!user.name || !user.email) {
    return res.status(400).send('Invalid user data');
  }
  db.createUser(user, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating user');
    } 
    res.status(201).send(result);
  });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});