const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

const salt = bcrypt.genSaltSync(10);
const JWT_SECRET = 'asdfadf22k23h4kj2h4kh223';

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({ id: userDoc._id, username: userDoc.username, email: userDoc.email });
  } catch (e) {
    if (e.code === 11000) {
      // MongoDB duplicate key error
      const field = Object.keys(e.keyPattern)[0];
      res.status(400).json({ error: `${field} already exists` });
    } else {
      res.status(400).json({ error: e.message });
    }
  }
});

router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let userDoc;
    if (email) {
      userDoc = await User.findOne({ email });
    } else if (username) {
      userDoc = await User.findOne({ username });
    } else {
      return res.status(400).json({ error: "Please provide either username or email" });
    }

    if (!userDoc) {
      return res.status(400).json({ error: "User not found" });
    }
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if (passOk) {
      jwt.sign(
        { username: userDoc.username, email: userDoc.email, id: userDoc._id },
        JWT_SECRET,
        { expiresIn: "1d" },
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: true,
              sameSite: "none",
              maxAge: 24 * 60 * 60 * 1000, // 1 day
            })
            .json({
              id: userDoc._id,
              username: userDoc.username,
              email: userDoc.email,
            });
        }
      );
    } else {
      res.status(400).json({ error: "Wrong credentials" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error occurred" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  }).json({ message: "Logged out successfully" });
});

router.get("/verify", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    res.json({ id: decoded.id, username: decoded.username, email: decoded.email });
  });
});

module.exports = router;