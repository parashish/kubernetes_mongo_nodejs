const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//Connect to MongoDB
//const url = 'mongodb://ZGJ1c2Vy:ZGJwYXNzd29yZA==@mongodb-service:27017/mydatabase';
mongoose.connect('mongodb://mongodb-service:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

//Define a user model
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model('User', UserSchema);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const { name, age } = req.body;
  const user = new User({ name, age });
  await user.save();
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});