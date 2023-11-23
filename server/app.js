const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const registerModel = require('./Model/RegisterModel')
// const auth = require('./middleware/auth')
const app = express()
const port = 4000;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()
require('./config/database')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  registerModel
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "successful", name: user.name });
        } else {
          res.json({ message: "invalid password" });
        }
      } else {
        res.json({ message: "non existed record" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred" });
    });
});
  
  app.post('/register',async(req,res)=>{
    const {fullName,
    Email,
    UserName,
    password,
    country,
    occupation,
    Marital_status}=req.body
    const hashedPassword = await bcrypt.hash(password,12);
    const user = await registerModel.create({
      fullName,
      Email,
      UserName,
      password: hashedPassword,
      country,
      occupation,
      Marital_status,
    });
    const token = jwt.sign(
      {user_id:user._id},
      process.env.JWT_SECRETE,
      {
        expiresIn:"5h",
      }
    )

    res.status(201).json({
      status:'success',
      token,
      user
    })
  })

app.post('/submit-message',async(req,res)=>{
  const {fullName,email,message}=req.body;

  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user:'mgbemenaosonduv@gmail.com',
      pass:'09077955363'
    }
  });

  const mailOptions ={
    from:'aztop29@gmail.com',
    to:'aztop29@gmail.com',
    subject:'new message from your website',
    text: `name: ${fullName}\nEmail:${email}\nMessage:${message}`,
  };

  try{
    await transporter.sendMail(mailOptions)
    res.status(200).json({message:'Message sent successfully!'});
  }catch(error){
    console.error(error);
    res.status(500).json({message:'Error sending message'})
  }
})

app.listen(port,()=>{
    console.log(`app is running on port 4000`);
})