const jwt = require("jsonwebtoken");

const JWT_SECRET = 'asdfadf22k23h4kj2h4kh223';

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, JWT_SECRET, (err, info) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.userInfo = info;
    next();
  });
};

module.exports = authenticateToken;