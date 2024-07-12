const User = require("../model/user");
const JWT = require("jsonwebtoken");
const SECRET_KEY = "rajeshwari20";
const dotenv = require("dotenv");

dotenv.config();

// Register User
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    const result = await newUser.save();
    res.status(201).send({ message: "User registered successfully.", result });
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

//login user

const loginUser = async (req, res) => {
  try {
    const data = req.body;

    const userEmail = await User.findOne({email: data.email});
    if (!userEmail) {
      res.status(500).send({ message: "user email not verified" });
    } else {
      const password = await User.findOne({password: data.password});
      if (!password) {
        res.status(500).send({ message: "user password not verified" });
      } else {
        // Generate a JWT token
        const token = JWT.sign(
          { id: userEmail._id, email: userEmail.email }, 
          SECRET_KEY,
          {expiresIn: "10m"});

        res.status(201).send({ userEmail, token});
      }
    }
  } catch (error) {
    throw {
      status: 500,
      send: "Throw error in login",
    };
  }
};


module.exports = { registerUser, loginUser };
