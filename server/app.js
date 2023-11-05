const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const registerModel = require('./Model/RegisterModel')
const Message = require('./Model/messageModel'); // Import the Message model

const app = express()

app.use(express.json())
app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb+srv://mgbemenaosonduv:777645dg@cluster0.cfvq2nq.mongodb.net/?retryWrites=true&w=majority')

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    registerModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json({ message: 'successfull', name: user.name });
          } else {
            res.json({ message: 'invalid password' });
          }
        } else {
          res.json({ message: 'non existed record' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'An error occurred' });
      });
  });
  
  
  app.post('/send', (req, res) => {
    const { name, email, message } = req.body;
  
    const newMessage = new Message({
      name,
      email,
      message,
    });
  
    newMessage
      .save()
      .then(() => {
        res.json({ message: 'Message saved successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Error saving the message' });
      });
  });
  
  

app.post('/register',(req,res)=>{
    registerModel.create(req.body)
    .then(signUp => res.json(signUp))
    .catch(err => res.json(err))
})  

app.listen(4000,()=>{
    console.log('server is running');
})