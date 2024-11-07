const express = require("express");
const app = express();
require("dotenv").config();
const USER = require("./models/user");
const bcrypt = require('bcrypt');
const mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
var cors = require('cors');

const saltRounds = 10;
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
  .then(()=> console.log('mongoDB connected') )
  .catch((err)=> console.log('MongoDB Connection Error : ',err))

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}))

app.use(express.json());    // Middleware to parse JSON requests

app.post("/register", async(req, res) => {        //CREATE NEW USER
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const createdUser = await USER.create({username, email, password:hashedPassword});
  res.status(201).json(createdUser);
});


app.get("/login", async(req, res) => {           //LOGIN EXISTING USER
  const { email, password } = req.body;
  const foundUser = await USER.findOne({email});

  if ( foundUser && await bcrypt.compare(foundUser.password , password) ) {
    jwt.sign({
      email,
      id: foundUser._id,
      name: foundUser.username
    }, process.env.JWT_SECRET_KEY, {}, (err, token)=> {
      if (err) throw err;
      res.cookie('token',token)
    });
    return res.status(200).json("Successfull Login")
  }else{
    return res.status(401).json("Invalid email or password")
  }

});



app.listen(PORT, () => console.log("Server started at Port ", PORT));
// 82Y1IvKenrj3032f